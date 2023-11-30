import React from 'react';
import useAllagreeuser from '../../Hooks/useAllagreeuser';
// import useAxios from '../../Hooks/useAxios';
// import Swal from 'sweetalert2';
import AgreeCard from '../../Components/AgreeCard';


const Agree = () => {
  // const axiosbase = useAxios()
  const [allagreeuser] = useAllagreeuser()
console.log(allagreeuser);

const checked = allagreeuser.filter(items=> items.status ==='checked')
const pending = allagreeuser.filter(items=> items.status ==='pending')
// const handleReject = (id) =>{
//   axiosbase.patch(`/allagreeuser/${id}`)
//   .then(res=>{
//     if (res.data.modifiedCount) {
//       Swal.fire({
//         title: "Good job!",
//         text: "You checked the agreement!",
//         icon: "success"
//       });
//     }
//     refetch()
//   })
// }
  return (
    <div className='p-5'>
      <h1 className='text-lg font-semibold text-blue-300'>Welcome from agreement request pages. All agreement request is shown here.</h1>
      <h1 className='text-green-500 font-bold'>checked: {checked.length}</h1>
      <h1 className='text-red-600 font-bold'>pending: {pending.length}</h1>
      <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
      {
        allagreeuser.map(item=>
          <AgreeCard key={item._id} item={item}></AgreeCard>
      //   <div key={item._id} className="card bg-base-100 shadow-xl">
      //   <div className="card-actions justify-end mt-2 mr-4">
      //     <div className="badge badge-outline bg-blue-200">{item.status}</div>
      //   </div>

      //   <div className="card-body items-center text-center text-lg font-bold">
      //     <p className='text-blue-500'>Name: {item.name}</p>
      //     <p className='text-blue-500'>Email: {item.email}</p>
      //     <div className='flex gap-4'>
      //       <p>Floor No. {item.floor}</p>
      //       <p>Block name: {item.block}</p>
      //     </div>
      //     <div className='flex gap-4'>
      //       <p>Apartment: {item.apartment}</p>
      //       <p>Rent: {item.rent}</p>
      //     </div>
      //     <div className="card-actions justify-end">
      //       <button className="btn btn-primary">Accept</button>
      //       <button onClick={()=>{handleReject(item._id)}} className="btn btn-error">Reject</button>
      //     </div>
      //   </div>

      // </div>
        )
      }
      </div>
    </div>
  );
};

export default Agree;