import React, { useContext } from 'react';
// import { FcGoogle } from "react-icons/fc";
import { CgLogIn } from "react-icons/cg";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin';
const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
// console.log(location);
    const handleSignin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email,password);
        signIn(email, password)
            .then(res => {

                navigate(location?.state ? location.state.from?.pathname : '/')
                console.log(res);
            })
            .catch(err => {
                Swal.fire({
                    title: "An error occured",
                    text: "Please try again later",
                    icon: "error"
                });
                console.log(err);
            })
    }

    // const handleGoogle = ()=>{
    //     googleSignin()
    //     .then(res=>{

    //         navigate(location?.state ? location.state.from?.pathname : '/')
    //         console.log(res);
    //     })
    //     .catch(err=>{
    //         Swal.fire({
    //             title: "An error occured",
    //             text: "Please try again later",
    //             icon: "error"
    //           });
    //         console.error(err)
    //     })
    // }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 md:w-96 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p href="#" className="label-text-alt link link-hover">Forgot password?</p>
                            </label>
                            <label className="label">
                                <p href="#" className="label-text-alt link text-blue-700 text-lg font-bold link-hover">Don't Have an account?<span className='text-red-500 ml-3'><Link to={'/register'}> Register Now</Link></span></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login <span className='text-3xl text-green-400'><CgLogIn /></span></button>
                        </div>
                        <div className="divider">Or login with</div>
                    </form>

                    <div className='text-center pb-12'>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;