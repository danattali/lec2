import { useForm } from "react-hook-form";
import { RegisterUser } from "../@types/types";
import patterns from "../validation/patterns";

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

                <input
                    placeholder="Email"
                    type="email"
                    {...register("email", {
                        required: "This field is mandatory",
                        pattern: {
                            value: patterns.email,
                            message: "Invalid email",
                        },
                    })}
                />
                {errors.email && (
                    <p className="text-red-500">{errors.email?.message as string}</p>
                )}
                <input
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                        required: "This field is mandatory",
                        pattern: {
                            value:
                                patterns.password,
                            message:
                                "Password must be at least 9 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-red-500">{errors.password?.message}</p>
                )}
                <input
                    placeholder="Image URL"
                    type="url"
                    {...register("image.url", {
                        pattern: {
                            value: patterns.url,
                            message: "Invalid image URL",
                        },
                    })}
                />
                {errors.image?.url && (
                    <p className="text-red-500">{errors.image?.url?.message}</p>
                )}

                <input
                    placeholder="Image Description"
                    type="text"
                    {...register("image.alt", {
                        minLength: { value: 2, message: "Too short" },
                        maxLength: { value: 255, message: "Too long" },
                    })}
                />
                {errors.image?.alt && (
                    <p className="text-red-500">{errors.image?.alt?.message}</p>
                )}
                <button type="submit">Register</button>
            </form>
        </div >
    );
};

export default Register;