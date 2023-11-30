import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const axiosbase = useAxios()
    const {data: isAdmin} = useQuery({
        queryKey: [user?.email,'isAdmin'],
        queryFn: async()=>{
            const result = await axiosbase.get(`/user/admin/${user.email}`)
            return result.data?.admin
        }
    })
    return[isAdmin]
};

export default useAdmin;