import * as imports from "./imports.module";
import { type SubmitHandler } from "react-hook-form";
import formStyles from "../../../../shared/stylesheets/form.styles.module.scss";

const schema = imports.z.object({
  username: imports.z.string().min(4),
  email: imports.z.string().email(),
  password: imports.z.string().min(8),
});

type FormFields = imports.z.infer<typeof schema>;

const SignupFormComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = imports.useForm<FormFields>({
    resolver: imports.zodResolver(schema),
  });
  const { signup } = imports.useSignup();
  const dispatch = imports.useDispatch();
  const navigate = imports.useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await signup({ user: data });
      dispatch(imports.setUser(response.user));
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
    <section className={`signup-form ${formStyles.form}`}>
      <header>
        <h1>Sign Up</h1>
        <imports.NavLink to={"/login"}>Have an account?</imports.NavLink>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.root && <div className={"error"}>{errors.root.message}</div>}
        <input {...register("username")} type="text" placeholder="Username" />
        {errors.username && (
          <div className={"error"}>{errors.username.message}</div>
        )}
        <input {...register("email")} type="email" placeholder="Email" />
        {errors.email && <div className={"error"}>{errors.email.message}</div>}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <div className={"error"}>{errors.password.message}</div>
        )}
        {!isSubmitting && <button type={"submit"}>Sign Up</button>}
        {isSubmitting && (
          <button type={"button"} disabled>
            Signing Up <imports.ButtonSpinnerA />
          </button>
        )}
      </form>
    </section>
  );
};

export default SignupFormComponent;
