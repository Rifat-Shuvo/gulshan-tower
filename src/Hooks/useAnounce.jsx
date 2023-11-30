import { useQuery } from '@tanstack/react-query';


import useAxios from './useAxios';

const useAnounce = () => {
    const axiosbase = useAxios()
    const {data: anunce = []} = useQuery({
        queryKey: ['anounce'],
        queryFn: async()=>{
            const res = await axiosbase.get('/anounce')
            return res.data
        }
    })
    return [anunce]
};

export default useAnounce;