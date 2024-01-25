import {useForm, SubmitHandler} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import ButtonSpinnerA from '../../../../shared/components/loaders/button-spinner-a/ButtonSpinerA'
import './LoginForm.scss';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

type FormFields = z.infer<typeof schema>;

const LoginFormComponent = () => {
    const {register,
        handleSubmit,
        setError,
        formState: {errors, isSubmitting}
    } = useForm<FormFields>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<FormFields> = async (data)=>{
        try{
            await new Promise(resolve => setTimeout(resolve, 1000));
            throw new Error("This email is already taken");
            console.log(data) ;
        } catch (e){
            if(e instanceof Error){
                setError("root", {
                    message: e.message
                });
            }
        }
    }

    return(
        <section className={"login-form"}>
            <header>
                <h1>Sign In</h1>
                <p>Need an account?</p>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.root && <div className={"error"}>{errors.root.message}</div>}
                <input {...register("email")} type={"text"} placeholder={"Email"}/>
                {errors.email && <div className={"error"}>{errors.email.message}</div>}
                <input {...register("password")} type={"password"} placeholder={"Password"}/>
                {errors.password && <div className={"error"}>{errors.password.message}</div>}
                {!isSubmitting && <button>Sign In</button>}
                {isSubmitting && <button disabled>Signing In <ButtonSpinnerA/> </button>}
            </form>
        </section>
    );
}

export default LoginFormComponent;