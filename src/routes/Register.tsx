import { useForm } from "react-hook-form";

const Register = () => {

    const { register, handleSubmit } = useForm();

    const onRegister = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onRegister)}>
            <input type="text" {...register("firstname")} />
            <input type="text" {...register("lastname")} />
            <input type="number" {...register("age")} />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;