import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import useAxios from '../Hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const {googleSignin} = useContext(AuthContext)
    const axiosbase = useAxios()
    const navigate = useNavigate()
    const handleGoogle = () =>{
        googleSignin()
        .then(result =>{
            console.log(result);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role: 'user'
            }
            axiosbase.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
            })
            Swal.fire({
                title: "Success!",
                text: "You signin successfully by google!",
                icon: "success"
            });
            navigate('/');
        })
        .catch(err=>{
            Swal.fire({
                title: "An error occured",
                text: "Please try again later",
                icon: "error"
              });
            console.error(err)
        })
    }
    return (
        <button onClick={handleGoogle} className='btn rounded-full'><span className='text-xl'><FcGoogle /></span>Google</button>    
    );
};

export default SocialLogin;