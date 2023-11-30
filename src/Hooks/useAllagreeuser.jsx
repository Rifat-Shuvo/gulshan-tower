
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useAllagreeuser = () => {
    const axiosbase = useAxios()
    const {data: allagreeuser=[], refetch} = useQuery({
        queryKey:['allagreeuser'],
        queryFn: async ()=>{
            const res = await axiosbase.get('/allagreeuser')
            return res.data
        }
    })
    return [allagreeuser,refetch]
};

export default useAllagreeuser;