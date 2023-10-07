import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { imageUpload } from '../../api/imageUpload';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const [showConfPass, setShowConfPass] = useState(false);
    const [imgName, setImgName] = useState('Upload Image');
    const {user, registerWithEmailAndPassword, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();




    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

        // console.log(data.email)

        const image = data.photo[0];
        const email = data.email;
        const name = data.name;
        const password = data.password;
        const confirmPassword = data.ConfirmPassword;


        if (password !== confirmPassword) {
            toast.error('password not match');
            return;
        }



        imageUpload(image)
            .then(result => {
                const imgURl = result.data.display_url;

                registerWithEmailAndPassword(email, password)
                    .then(result => {
                        const user = result.user;
                        updateProfile(user, {
                            displayName: name, photoURL: imgURl
                        }).then(() => {
                            // Profile updated!
                            toast.success("Registration Successful!")
                            reset()
                            navigate('/')

                        }).catch((error) => {
                            // An error occurred
                            toast.error(error.message);
                        });

                    })
                    .catch(err => {
                        const error = err.message;
                        toast.error(error);
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result=>{
            toast.success('Login successfull')
            navigate('/')
        })
        .catch(err=>{
            toast.error(err.message)
            setLoading(false)
        })
    }





    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-bold">Create Account</h1>
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
                        {/* Name field  */}
                        <div className="border-b">
                            <label htmlFor="name" className='block'>Name</label>
                            <input
                                id="name"
                                placeholder="Enter Your name"
                                required type="name"
                                {...register('name', { required: true })}
                                className="w-full outline-none py-1"
                            />
                        </div>
                        {/* email field  */}
                        <div className="border-b mt-2">
                            <label htmlFor="email" className='block'>Email</label>
                            <input
                                id="email"
                                placeholder="m@example.com"
                                required type="email"
                                {...register('email', { required: true })}
                                className="w-full outline-none py-1"
                            />
                        </div>

                        {/* password field  */}
                        <div className="mt-2 border-b">
                            <label htmlFor="password" className='block'>Password</label>
                            <div className='flex'>
                                <input
                                    id="password"
                                    required
                                    type={showPass ? "text" : "password"}
                                    {...register('password', { required: true })}
                                    className="w-full outline-none py-1"
                                />

                                {/* password show / hide */}
                                <span
                                    className='h-4 w-4'
                                    onClick={() => setShowPass(!showPass)}
                                >
                                    {
                                        showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                                    }
                                </span>
                            </div>
                        </div>
                        {/*confirm password field  */}
                        <div className="mt-2 border-b">
                            <label htmlFor="ConfirmPassword" className='block'>Confirm Password</label>
                            <div className='flex'>
                                <input
                                    id="ConfirmPassword"
                                    required
                                    type={showConfPass ? "text" : "password"}
                                    {...register('ConfirmPassword', { required: true })}
                                    className="w-full outline-none py-1"
                                />

                                {/* password show / hide */}
                                <span
                                    className='h-4 w-4'
                                    onClick={() => setShowConfPass(!showConfPass)}
                                >
                                    {
                                        showPass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                                    }
                                </span>
                            </div>
                        </div>

                        {/* photo  */}
                        <div className="mt-4">
                            <label className="block text-gray-700 overflow-hidden">
                                <input
                                    {...register('photo')}
                                    type="file"
                                    onChange={(e) => setImgName(e.target.files[0].name)}
                                    className="sr-only"
                                    accept="image/*" required />
                                Profile Picture

                                <div className='bg-sky-400 text-white border border-gray-300 rounded font-semibold cursor-pointer w-fit p-1 px-3 hover:bg-sky-500'>
                                    <p className='max-w-full'>{imgName}</p>
                                </div>
                            </label>

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
                            <FcGoogle className='' />
                            Login with Google
                        </div>
                    </button>


                </div>
            </div>
        </div>
    );
};

export default Register;