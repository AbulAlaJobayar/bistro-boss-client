import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProviders';
import { Link } from 'react-router-dom';

const SingUp = () => {
const {createUser}=useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
    };

    return (
        <>
         <Helmet>
                <title>Bistro Boss | SingUP</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SingUp Now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email",{ required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",{ required: true,
                            minLength:6, 
                            maxLength: 20 ,
                            pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>password must be 6 character</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600'>password must have one Uppercase one LowerCase One Number and One spacial character</p>}
                            

                        </div>
                        <div className="form-control mt-6">
                            
                            <input className='btn btn-primary' type="submit" value="Singup" />
                        </div>
                    </form>
                    <p className='text-center pb-4'><small>Already have an account? <Link to='/login'
                     >Login </Link></small></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default SingUp;