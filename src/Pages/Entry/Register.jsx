import React, { useContext } from 'react';
// import { FcGoogle } from "react-icons/fc";

import { FaRegAddressBook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
import SocialLogin from '../../Components/SocialLogin';

const Register = () => {
    const axiosbase = useAxios()
    const navigate = useNavigate()
    const { createUser, handleUpdateProfile } = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // console.log(name,photo,email,password);
        ///^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
        if (!/^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-<>]).{6,}$/.test(password)) {
            Swal.fire({
                title: "Please write a validate password",
                text: "Your password atleast have 6 characters. Also, Your Password must have one uppercase letter, one number & special character(eg. @,#,&,< etc.).",
                icon: "error"
              }); 
              return
        }
        createUser(email,password)
        .then(res=>{
            console.log(res)
            handleUpdateProfile(name,photo)
            .then(() => {
                
                // create user entry in the database
                const userInfo = {
                    name: name,
                    email: email,
                    role: 'user'
                }
                axiosbase.post('/users', userInfo)
                .then((res)=>{
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Success",
                            text: "user created successfully!",
                            icon: "success"
                          }); 
                        }
                        navigate('/')
                    })
            })
            .catch(err => console.log(err))
            
        })
        .catch(err=>{
            Swal.fire({
                title: "Somethin wrong",
                text: "Try Again!",
                icon: "error"
              });
            console.log(err);
        })
    }
    // const handleGoogle = ()=>{
    //     googleSignin()
    //     .then(res=>{
    //         Swal.fire({
    //             title: "Good job!",
    //             text: "You clicked the button!",
    //             icon: "success"
    //           });

    //         console.log(res);
    //     })
    //     .catch(err=>{
    //         Swal.fire({
    //             title: "Good job!",
    //             text: "You clicked the button!",
    //             icon: "error"
    //           });
    //         console.error(err)
    //     })
    // }

return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 md:w-96 shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Write Your Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                            <p className="label-text-alt link text-blue-700 text-lg font-bold link-hover">Already Have an account?<span className='text-red-500 ml-2'><Link to={'/login'}>Login Now</Link></span></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register <span className='text-2xl text-orange-600'><FaRegAddressBook /></span></button>
                    </div>
                    <div className="divider">Or Register with</div>
                </form>

                <div className='text-center pb-12'>
                   <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    </div>
);
}

export default Register;