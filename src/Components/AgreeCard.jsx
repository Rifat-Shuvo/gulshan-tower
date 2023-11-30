import React from 'react';
import Swal from 'sweetalert2';
import useAllagreeuser from '../Hooks/useAllagreeuser';
import useAxios from '../Hooks/useAxios';


const AgreeCard = ({ item }) => {
    const {_id,status, name, email, floor, block, apartment, rent} = item
    const[, refetch] = useAllagreeuser()
    const axiosbase = useAxios()

    
    const handleReject = (id) =>{
        axiosbase.patch(`/allagreeuser/${id}`)
        .then(res=>{
            if (res.data.modifiedCount) {
                Swal.fire({
                    title: "Good job!",
                    text: "You checked the agreement!",
                    icon: "success"
                });
            }
            refetch()
        })
    }
    const handleChangeRole = (email) =>{
        axiosbase.put(`/user/${email}`)
        .then(res=>{
            console.log(res);
           if (res.data.modifiedCount) {
            Swal.fire({
                title: "Good job!",
                text: "You Accepted the agreement!",
                icon: "success"
            });
           }
        })
    }
    const handleAccept = (id, email) =>{
        handleChangeRole(email)
        handleReject(id)
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-actions justify-end mt-2 mr-4">
                    <div className="badge badge-outline bg-blue-200">{status}</div>
                </div>

                <div className="card-body items-center text-center text-lg font-bold">
                    <p className='text-blue-500'>Name: {name}</p>
                    <p className='text-blue-500'>Email: {email}</p>
                    <div className='flex gap-4'>
                        <p>Floor No. {floor}</p>
                        <p>Block name: {block}</p>
                    </div>
                    <div className='flex gap-4'>
                        <p>Apartment: {apartment}</p>
                        <p>Rent: {rent}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={()=>{handleAccept(_id, email)}} className="btn btn-primary">Accept</button>
                        <button onClick={() => {handleReject(_id)}} className="btn btn-error">Reject</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AgreeCard;