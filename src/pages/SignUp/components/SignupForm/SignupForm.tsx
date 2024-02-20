import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ButtonSpinnerA from "../../../../shared/components/loaders/button-spinner-a/ButtonSpinerA";
import { useSignup } from "../../../../hooks/useSignup";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../store/userSlice";
import { useNavigate, NavLink } from "react-router-dom";
import "../../../../shared/stylesheets/auth.styles.scss";

const schema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const SignupFormComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const { signup } = useSignup();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await signup({ user: data });
      dispatch(setUser(response));
      navigate("/");
    } catch (e) {
      if (Array.isArray(e)) {
        setError("root", {
          message: e.join(" "),
        });
      } else if (e instanceof Error) {
        setError("root", {
          message: e.message,
        });
      }
    }
  };

  return (
    <section className={"signup-form"}>
      <header>
        <h1>Sign Up</h1>
        <NavLink to={"/login"}>Have an account?</NavLink>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.root && <div className={"error"}>{errors.root.message}</div>}
        <input {...register("username")} type="text" placeholder="Username" />
        {errors.username && <div className={"error"}>{errors.username.message}</div>}
        <input {...register("email")} type="email" placeholder="email" />
        {errors.email && <div className={"error"}>{errors.email.message}</div>}
        <input {...register("password")} type="password" placeholder="password" />
        {errors.password && <div className={"error"}>{errors.password.message}</div>}
        {!isSubmitting && <button type={"submit"}>Sign Up</button>}
        {isSubmitting && (
          <button type={"button"} disabled>
            Signing Up <ButtonSpinnerA />
          </button>
        )}
      </form>
    </section>
  );
};

export default SignupFormComponent;
