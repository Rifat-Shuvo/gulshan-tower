import React from 'react';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const MakeAnounce = () => {
    const axiosbase = useAxios()
    const handleAnounce = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        // console.log(title, description);
        const anouncement = {
            title,
            description
        }
        axiosbase.post('/anounce',anouncement)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    title: "Success!!!",
                    text: "Your Anouncement share to all.",
                    icon: "success"
                });
            }
        })
    }
    return (
        <div className='w-3/4'>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 md:w-96 shadow-2xl bg-base-100">
                        <h1 className='text-center text-blue-700 pt-5 text-2xl font-semibold'>Anouncement</h1>
                        <form onSubmit={handleAnounce} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" name='title' placeholder="Title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name="description" className='input input-bordered h-28' placeholder='Write description'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Make Anounce<span className='text-3xl text-green-400'><HiOutlineSpeakerphone></HiOutlineSpeakerphone></span></button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAnounce;