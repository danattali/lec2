import React from 'react'
import { useForm } from 'react-hook-form'
import { LoginUser } from '../@types/types'

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginUser>()
    return (
        <div>
            <h2>Login Page</h2>
            <form>
                {/*email*/}
                <section></section>
                {/*password*/}
                <section></section>

                <button>Login</button>


                <button type="submit">Login</button>
            </form>
        </div >
    )
}

export default Login