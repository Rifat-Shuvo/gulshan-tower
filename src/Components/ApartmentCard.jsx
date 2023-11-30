import React, { useContext } from 'react';
import { MdHistoryEdu } from "react-icons/md";
import { AuthContext } from '../Providers/AuthProvider';
import useAxios from '../Hooks/useAxios';
import Swal from 'sweetalert2';
const ApartmentCard = ({item}) => {
    const {user} = useContext(AuthContext)

    const{img, floor, block, apartment,rent} = item

    const handleAgreementrequest = () =>{
        const axiosbase = useAxios()
        

        if (user && user.email) {
            const agreementItem = {
                name: user.displayName,
                email: user.email,
                status: 'pending',
                floor,
                block,
                apartment,
                rent
            }
            axiosbase.post('/allagreement', agreementItem)
            .then(res=>{
                console.log(res.data);
                Swal.fire({
                    title: "Good job!",
                    text: "You Sucessfully Make agreement request. Your request is under review.",
                    icon: "success"
                  });
            })
            .catch(err=>{
                console.log(err.message);
                Swal.fire({
                    title: "Sorry!",
                    text: "Something Wrong. Please Try again later.",
                    icon: "error"
                  });
            })
        } else {
            Swal.fire({
                title: "Login First",
                text: "If You Want to make agreement, First Register, Then Make Request. If You Register Yet, Please Login.",
                icon: "info"
              });
        }
        // console.log(agreementItem);
    }
    return (
        <div className="flex flex-row gap-7 bg-base-100 shadow-xl p-5 rounded-xl">
        <div className='w-1/2 my-auto'>
            <img src={img} alt="Apartment" />
        </div>
        <div className="w-1/2 my-auto">
            <ul className='list-disc text-blue-600 text-lg'>
                <li>Floor No. {floor}</li>
                <li>Block Name: {block}</li>
                <li>Apartment No. {apartment}</li>
                <li>Rent: ${rent}</li>
            </ul>
            <div className="mt-5">
            <button onClick={handleAgreementrequest} className="btn btn-primary"><span className='text-2xl'><MdHistoryEdu></MdHistoryEdu></span>Make Agreement</button>
            </div>
        </div>
    </div>
    );
};

export default ApartmentCard;