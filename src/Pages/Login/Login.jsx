import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";



const Login = () => {
    const [showPass, setShowPass] = useState(false);

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }


    const handleGoogleLogin = ()=>{
        alert('hello google')
    }


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold">Login</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">
                        By logging in, you accept our
                        <Link className="text-blue-500 hover:text-blue-700" href="#">
                            terms
                        </Link>
                        and
                        <Link className="text-blue-500 hover:text-blue-700" href="#">
                            privacy policy
                        </Link>
                        .
                    </p>
                </div>
                <div className="space-y-4">

                    {/* form section  */}
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        {/* email field  */}
                        <div className="border-b">
                            <label htmlFor="email" className='block'>Email</label>
                            <input
                                id="email"
                                placeholder="m@example.com"
                                required type="email"
                                {...register('email', {required: true})}
                                className="w-full outline-none py-1"
                            />
                        </div>

                        {/* password field  */}
                        <div className="mt-4 border-b">
                            <label htmlFor="password" className='block'>Password</label>
                            <div className='flex'>
                                <input
                                    id="password"
                                    required 
                                    type={showPass ? "text" : "password"}
                                    {...register('password',{required: true})}
                                    className="w-full outline-none py-1"
                                />

                                {/* password show / hide */}
                                <span
                                className='h-4 w-4'
                                onClick={()=>setShowPass(!showPass)}
                                >
                                    {
                                        showPass ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                                    }
                                </span>
                            </div>
                        </div>


                        <button type='submit' className='bg-gray-700 text-white w-full py-1 rounded mt-10'>Login</button>
                    </form>
                    <div className="flex items-center space-x-2">
                        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                        <span className="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
                        <hr className="flex-grow border-zinc-200 dark:border-zinc-700" />
                    </div>
                    <button onClick={handleGoogleLogin} className="w-full py-2 bg-[#ffffff] text-gray-700 font-semibold border rounded hover:bg-slate-200" variant="outline">
                        <div className="flex items-center gap-2 justify-center">
                            <FcGoogle className=''/>
                            Login with Google
                        </div>
                    </button>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Login;