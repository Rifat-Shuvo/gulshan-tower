import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAllUser from '../../Hooks/useAllUser';

const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    const [alluser] = useAllUser()
    console.log(alluser);
    const users = alluser.filter(item=> item.role === 'user')
    const members = alluser.filter(item=> item.role === 'member')
    console.log(users, members);
    return (
        <div className='text-center p-3 my-10'>
            <div className="avatar p-8">
                <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <div>
                <div className='text-xl py-5 text-justify text-blue-800'>
                    <h1 className='text-2xl font-medium py-6'>Welcome {user?.displayName}</h1>
                    <p className='text-green-700 font-semibold'>Email: {user?.email}</p>
                </div>
            </div>
            <div>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value text-primary">{users.length}</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Total Members</div>
                        <div className="stat-value text-secondary">{members.length}</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    

                </div>
            </div>
        </div>
    );
};

export default AdminProfile;