import * as imports from "./imports.module";
import { type SubmitHandler } from "react-hook-form";
import formStyles from "../../../../shared/stylesheets/form.styles.module.scss";

const schema = imports.z.object({
  email: imports.z.string().email(),
  password: imports.z.string().min(8),
});

type FormFields = imports.z.infer<typeof schema>;

const LoginFormComponent = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = imports.useForm<FormFields>({
    resolver: imports.zodResolver(schema),
  });
  const { login } = imports.useLogin();
  const dispatch = imports.useDispatch();
  const navigate = imports.useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await login({ user: data });
      dispatch(imports.setUser(response.user));
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
        <imports.NavLink to={"/register"}>Need an account?</imports.NavLink>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.root && (
          <div className={formStyles.error}>{errors.root.message}</div>
        )}
        <input {...register("email")} type={"text"} placeholder={"Email"} />
        {errors.email && (
          <div className={formStyles.error}>{errors.email.message}</div>
        )}
        <input
          {...register("password")}
          type={"password"}
          placeholder={"Password"}
        />
        {errors.password && (
          <div className={formStyles.error}>{errors.password.message}</div>
        )}
        {!isSubmitting && <button type={"submit"}>Sign In</button>}
        {isSubmitting && (
          <button type={"button"} disabled>
            Signing In <imports.ButtonSpinnerA />
          </button>
        )}
      </form>
    </section>
  );
};

export default LoginFormComponent;
