import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import UseAuth from '../../../hooks/UseAuth';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signInUser } = UseAuth();

    const handleLogin = (data) => {
        // console.log(data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                toast("Logged in successfully!!", { position: "top-center" })
            })
            .catch(error => {
                console.log(error.message)
                toast(error.message, { position: "top-center" })
            })
    }

    return (
        <div className="border p-5 rounded-2xl card-body">
            <ToastContainer position='top-center'></ToastContainer>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                    {
                        errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                    }
                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />
                    {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 character or long</p>
                    }
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <p>Don't have an account? PLease, <Link to="/register" className='font-bold underline text-blue-500'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;