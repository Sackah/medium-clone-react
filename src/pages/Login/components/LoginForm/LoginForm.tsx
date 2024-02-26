import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ButtonSpinnerA from "../../../../shared/components/loaders/button-spinner-a/ButtonSpinerA";
import { useLogin } from "../../../../hooks/useLogin";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../store/userSlice";
import { useNavigate, NavLink } from "react-router-dom";
import formStyles from "../../../../shared/stylesheets/form.styles.module.scss";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

const LoginFormComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const { login } = useLogin();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await login({ user: data });
      dispatch(setUser(response.user));
      navigate("/");
    } catch (e) {
      if (Array.isArray(e)) {
        setError("root", {
          message: e.join(", "),
        });
      } else if (e instanceof Error) {
        setError("root", {
          message: e.message,
        });
      }
    }
  };

  return (
    <section className={`login-form ${formStyles.form}`}>
      <header>
        <h1>Sign In</h1>
        <NavLink to={"/register"}>Need an account?</NavLink>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.root && <div className={"error"}>{errors.root.message}</div>}
        <input {...register("email")} type={"text"} placeholder={"Email"} />
        {errors.email && <div className={"error"}>{errors.email.message}</div>}
        <input
          {...register("password")}
          type={"password"}
          placeholder={"Password"}
        />
        {errors.password && (
          <div className={"error"}>{errors.password.message}</div>
        )}
        {!isSubmitting && <button type={"submit"}>Sign In</button>}
        {isSubmitting && (
          <button type={"button"} disabled>
            Signing In <ButtonSpinnerA />
          </button>
        )}
      </form>
    </section>
  );
};

export default LoginFormComponent;
