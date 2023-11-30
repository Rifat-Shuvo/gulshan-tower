
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAllUser = () => {
    const axiosbase = useAxios()
    const {data: alluser = [], refetch} = useQuery({
        queryKey:['alluser'],
        queryFn: async()=>{
            const res = await axiosbase.get('/users')
            return res.data
        }
    })
    return [alluser, refetch]
};

export default useAllUser;