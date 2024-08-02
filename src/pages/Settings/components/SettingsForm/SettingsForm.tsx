import * as imports from "./imports.module";
import { type SubmitHandler } from "react-hook-form";
import { type RootState } from "../../../../store/store";
import formStyles from "../../../../shared/stylesheets/form.styles.module.scss";

const schema = imports.z.object({
    image: imports.z.string().url(),
    username: imports.z.string().min(4),
    bio: imports.z.string(),
    email: imports.z.string().email(),
    password: imports.z.string().min(8),
});

type FormFields = imports.z.infer<typeof schema>;

export default function SettingsFormComponent() {
    const user = imports.useSelector((state: RootState) => state.user.data);
    const dispatch = imports.useDispatch();
    const { post } = imports.useUpdateUser();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = imports.useForm<FormFields>({
        resolver: imports.zodResolver(schema),
        defaultValues: {
            image: user?.image,
            username: user?.username,
            bio: user?.bio,
            email: user?.email,
        },
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const response = await post({ user: data });
            dispatch(imports.setUser(response?.user));
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
        <section className={`settings-form ${formStyles.form}`}>
            <header>
                <h1>Your Settings</h1>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.root && (
                    <div className={formStyles.error}>
                        {errors.root.message}
                    </div>
                )}
                <input
                    {...register("image")}
                    type="text"
                    placeholder="URL of profile picture"
                />
                {errors.image && (
                    <div className={formStyles.error}>
                        {errors.image.message}
                    </div>
                )}
                <input
                    {...register("username")}
                    type="text"
                    placeholder="Username"
                />
                {errors.username && (
                    <div className={formStyles.error}>
                        {errors.username.message}
                    </div>
                )}
                <textarea
                    {...register("bio")}
                    placeholder="Short bio about you"
                    rows={8}
                ></textarea>
                {errors.bio && (
                    <div className={formStyles.error}>{errors.bio.message}</div>
                )}
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                />
                {errors.email && (
                    <div className={formStyles.error}>
                        {errors.email.message}
                    </div>
                )}
                <input
                    {...register("password")}
                    type="password"
                    placeholder="New Password"
                />
                {errors.password && (
                    <div className={formStyles.error}>
                        {errors.password.message}
                    </div>
                )}
                <button type="submit" disabled={isSubmitting}>
                    Update Settings
                </button>
            </form>
        </section>
    );
}
