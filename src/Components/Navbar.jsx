import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { VscSignIn } from "react-icons/vsc";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
const Navbar = () => {
 const {user,logOut} =useContext(AuthContext)
// console.log(user);
 const handleSignOut=()=>{
    logOut()
    .then()
    .catch()
}
    const navlinks = <>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><li className='px-5'>Home</li></NavLink>
        <NavLink to={'/apartment'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><li>Apartment</li></NavLink>
    </>

    return (
        <div className="navbar bg-blue-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold text-blue-800 uppercase">Gulshan Tower</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end mr-7">
                { user ? 
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 font-semibold text-blue-600">
                    <li className='text-red-600'>{user.displayName}</li>
                    <li><Link to={'/dashboard'}>Dashboard <span className='text-lg text-green-700'><MdOutlineSpaceDashboard/></span> </Link></li>
                    <li><button onClick={handleSignOut}>Log out<span className='text-xl text-red-500'><LuLogOut /></span></button></li>
                    </ul>
                </div>
                 :
                <button className='btn btn-primary text-4xl rounded-full'><Link to={'/login'}><span className='text-green-500'><VscSignIn /></span></Link></button>
                 } 
            </div>
        </div>

    );
};



export default Navbar;