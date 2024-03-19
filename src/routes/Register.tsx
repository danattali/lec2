import { useForm } from "react-hook-form";
import { RegisterUser } from "../@types/types";

const Register = () => {

    const { register,
        handleSubmit,
        formState: { errors } } = useForm<RegisterUser>();

    const onRegister = (data: RegisterUser) => {
        console.log(data);
    };

    return (
        <form noValidate onSubmit={handleSubmit(onRegister)}>
            <input type="text" {...register("name.first", {
                required: "this field is mandatory",
                minLength: { value: 2, message: "too short" },
                maxLength: { value: 255, message: "too long" }
            })} />
            {errors.name?.first && <p className="text-red-500">{errors.name.first.message}</p>}
            <input type="text" {...register("name.last", {
                required: "this field is mandatory",
                minLength: { value: 2, message: "too short" },
                maxLength: { value: 255, message: "too long" }
            })} />
            {errors.name?.last && <p className="text-red-500">{errors.name.last.message}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;