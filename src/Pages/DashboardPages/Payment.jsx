import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useAllagreeuser from '../../Hooks/useAllagreeuser';

const Payment = () => {
    const {user} = useContext(AuthContext)
    // console.log(user.displayName);
   const {displayName, email} = user
   const [allagreeuser] = useAllagreeuser()
   const member = allagreeuser.filter(items=> items.email === user.email)
  const floor = member.map(item=>item.floor).join(', ')
  const block = member.map(item=>item.block).join(', ')
  const apartment = member.map(item=>item.apartment).join(', ') 
    return (

        <div className='w-full'>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 md:w-96 shadow-2xl bg-base-100">
                        <h1 className='text-center text-blue-700 pt-5 text-2xl font-semibold'>Make Your Payment</h1>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='Name' defaultValue={displayName} placeholder="Title" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='Email' defaultValue={email} placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Floor</span>
                                </label>
                                <input type="text" name='floor' defaultValue={floor} placeholder="Title" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Block</span>
                                </label>
                                <input type="text" name='block' defaultValue={block} placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Apartment</span>
                                </label>
                                <input type="text" name='apartment' placeholder="Title" defaultValue={apartment} className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Month</span>
                                </label>
                                <input type="date" name='date' placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control disabled mt-6">
                                <button className="btn btn-primary">Make Payment<span className='text-3xl text-green-400'></span></button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payment;