import React from 'react';
import useAllUser from '../../Hooks/useAllUser';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';


const ManageM = () => {
  const axiosbase = useAxios()
  const [alluser,refetch] = useAllUser()
  const member = alluser.filter(items=> items.role === 'member')
 const handleMember = (id) =>{
    axiosbase.patch(`/user/member?id=${id}`)
    .then(res=>{
      if (res.data.modifiedCount) {
          Swal.fire({
              title: "Good job!",
              text: "You Remove a Member!",
              icon: "success"
          });
      }
      refetch()
 })
 }

  return (
    <div>
      <h1 className='text-blue-300 font-medium'>Welcome to manage members routes</h1>
      
          
          
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr className='text-lg font-semibold'>
                    <th></th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {
                  member.map((item, index) =>
                      <tr key={item._id} className='text-blue-800 font-medium'>
                        <th>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><button onClick={()=>{handleMember(item._id)}} className='btn-error btn'>Remove</button></td>
                      </tr>
                    )
                    
                  }
                  {/* <tr  className='text-blue-800 font-medium'>
                        <th></th>
                        <td>name</td>
                        <td>email</td>
                        <td><button className='btn-error btn'>Remove</button></td>
                      </tr> */}

                </tbody>
              </table>
            </div>
         
      
    </div>
  );
};

export default ManageM;