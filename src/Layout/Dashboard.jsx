import React from 'react';
import { FaHistory, FaHome, FaMoneyBill, FaRegMoneyBillAlt, FaUser } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GrGroup } from "react-icons/gr";
import { MdHistoryEdu } from "react-icons/md";
// import useAllUser from '../Hooks/useAllUser';
import useMember from '../Hooks/useMember';
import useAdmin from '../Hooks/useAdmin';
const Dashboard = () => {
    // const [alluser] = useAllUser()
    // const isAdmin = alluser.filter(item=> item.role === 'admin')
    // const isMember = alluser.filter(item=> item.role === 'member')
    const [isAdmin] = useAdmin()
    const [isMember] = useMember()
    // console.log(isAdmin);
    const dashboardlinks = <>




        {
            isAdmin ? <>
                <li className='p-2 text-lg'> <NavLink to={'/dashboard/adminprofile'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span><FaUser /></span>Admin Profile</NavLink></li>
                <li className='p-2 text-lg'> <NavLink to={'/dashboard/manage'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span><GrGroup /></span>Manage Members</NavLink></li>

                <li className='p-2 text-lg'> <NavLink to={'/dashboard/agreement'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span className='text-2xl'><MdHistoryEdu /></span>Agreement Request</NavLink></li>

                <li className='p-2 text-lg'> <NavLink to={'/dashboard/makeanounce'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span className='text-xl'><HiOutlineSpeakerphone /></span>Make Anouncement</NavLink></li>
                <li className='p-2 text-lg'> <NavLink to={'/dashboard/cupons'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span className='text-xl'><FaMoneyBill /></span>Manage Cupons</NavLink></li>
            </>
                :

                isMember ?
                    <>
                        <li className='p-2 text-lg'> <NavLink to={'/dashboard/profile'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span><FaUser /></span> Profile</NavLink></li>

                        <li className='p-2 text-lg'> <NavLink to={'/dashboard/anounce'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span><HiOutlineSpeakerphone /></span> Anouncement</NavLink></li>
                        <li className='p-2 text-lg'> <NavLink to={'/dashboard/payment'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span><FaRegMoneyBillAlt /></span> Make Payment</NavLink></li>

                        <li className='p-2 text-lg'> <NavLink to={'/dashboard/history'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span><FaHistory /></span>Payment History</NavLink></li>
                    </>
                    :
                    <>
                        <li className='p-2 text-lg'> <NavLink to={'/dashboard/profile'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span><FaUser /></span> Profile</NavLink></li>

                        <li className='p-2 text-lg'> <NavLink to={'/dashboard/anounce'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><span><HiOutlineSpeakerphone /></span> Anouncement</NavLink></li>
                    </>

        }

    </>

    return (

        <div className="drawer pt-4 md:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open Menu</label>
                <h1 className='text-3xl text-blue-700 text-center'>WelCome To Dashboard</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-blue-100 text-base-content">
                    {/* Sidebar content here */}
                    <li className='text-xl font-bold'>Dashboard</li>
                    <li className='text-lg'><Link to={'/'}><FaHome />Go Home</Link></li>
                    {dashboardlinks}
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;