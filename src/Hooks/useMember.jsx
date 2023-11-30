import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxios from './useAxios';

const useMember = () => {
    const {user} = useContext(AuthContext)
    const axiosbase = useAxios()
    const {data: isMember} = useQuery({
        queryKey: [user?.email, 'isMember'],
        queryFn: async()=>{
          const res = await axiosbase.get(`/user/member/${user.email}`)
          return res.data?.member
        }
    })
    return [isMember]
};

export default useMember;