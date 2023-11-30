import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { IoIosMail } from "react-icons/io";
import useMember from '../../Hooks/useMember';
import useAllagreeuser from '../../Hooks/useAllagreeuser';
const Profile = () => {
    const {user} = useContext(AuthContext)
    const [isMember] = useMember()
    const [allagreeuser] = useAllagreeuser()
    const member = allagreeuser.filter(items=> items.email === user.email)
   const floor = member.map(item=>item.floor).join(', ')
   const block = member.map(item=>item.block).join(', ')
   const apartment = member.map(item=>item.apartment).join(', ')
//    const formattedfloor = floor.join(', ')
//    console.log(floor, block, apartment); 
 
    //
//     const floorValues = [3, 5, 2, 1, 4, 6, 8, 7, 5, 3, 9, 2, 6, 4, 1];

// const formattedFloorValues = floorValues.join(', ');

// console.log(formattedFloorValues);

    //
    return (
        <div className='text-center p-6'>
            <h1 className='text-2xl text-blue-500'>Welcome {user.displayName}</h1>
            <div className="avatar p-8">
                <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <div className='text-xl text-justify text-blue-800'>
                <p>Email: {user?.email}</p>
                {/* <p>Agreement accept Date: 22-10-25</p> */}
                <ul className='mt-5'>Rented Apartment info:</ul>
                    <li>Floor : {
                        isMember ? <span>{floor}</span> : 'None'
                        }</li>
                    <li>Block : {
                            isMember ? <span>{block}</span> : 'none'
                        }
                    </li>
                    <li>Apartment : {
                            isMember ? <span>{apartment}</span> : 'none'
                        }
                    </li>
            </div>

        </div>
    );
};

export default Profile;