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
        <div className="register-container">
            <h2 className="text-4xl mb-5 text-center">Register</h2>
            <form noValidate onSubmit={handleSubmit(onRegister)}>

                <input
                    placeholder="First Name"
                    type="text" {...register("name.first", {
                        required: "this field is mandatory",
                        minLength: { value: 2, message: "too short" },
                        maxLength: { value: 255, message: "too long" }
                    })} />
                {errors.name?.first && <p className="text-red-500">{errors.name.first.message}</p>}
                <input
                    placeholder="Middle Name"
                    type="text"
                    {...register("name.middle", {
                        minLength: { value: 2, message: "Too short" },
                        maxLength: { value: 255, message: "Too long" },
                    })}
                />
                {errors.name?.middle && (
                    <p className="text-red-500">{errors.name?.middle?.message}</p>
                )}

                <input
                    placeholder="Phone"
                    type="tel" {...register("phone", {
                        required: "this field is mandatory",
                        minLength: { value: 9, message: "too short" },
                        maxLength: { value: 10, message: "too long" },
                    })} />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                <button type="submit">Register</button>

            </form>
        </div >
    );
};

export default Register;