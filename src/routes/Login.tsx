import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { LoginUser } from '../@types/types'
import patterns from '../validation/patterns'
import auth from '../services/auth'
import { data } from 'autoprefixer'
import dialogs, { showSuccessDialog } from '../ui/dialogs'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const onLogin = (data: LoginUser) => {
        auth
            .login(data)
            .then((res) => {
                showSuccessDialog("Login", "Logged in").then(() => {
                    login(res.data);
                    // send the user to home page
                    navigate("/");
                });
            })
            .catch((e) => {
                dialogs.error("Login Error", e.response.data);
            });
    };

    const { register, handleSubmit, formState: { errors } } = useForm<LoginUser>()
    return (
        <div>
            <h2>Login Page</h2>
            <form noValidate onSubmit={handleSubmit(onLogin)}>
                {/*email*/}
                <section>
                    <input type="email" placeholder='Email'
                        {...register('email', {
                            required: 'Email is required',
                            pattern: patterns.email
                        })}
                    />
                    {errors.email && <p>{errors.email?.message}</p>}
                </section>
                {/*password*/}
                <section>
                    <input type="password" placeholder='Password'
                        {...register('password', {
                            required: 'Password is required',
                            pattern: patterns.password
                        })
                        }
                    />
                    {errors.password && <p>{errors.password?.message}</p>}
                </section>
                <button type="submit">Login</button>
            </form>
        </div >
    )
}

export default Login


