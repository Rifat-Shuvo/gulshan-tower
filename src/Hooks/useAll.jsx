
import { useQuery } from '@tanstack/react-query';

import useAxios from './useAxios';

const useAll = () => {
    const axiosbase = useAxios()
  const{data: all = [], isPending: loading} = useQuery({
    queryKey:['alldata'],
    queryFn: async()=>{
       const res =  await axiosbase.get('/allapartment')
       return res.data
    }
  })
  return [all, loading]
};

export default useAll;