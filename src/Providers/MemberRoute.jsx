import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

import { Navigate, useLocation } from 'react-router-dom';
import useMember from '../Hooks/useMember';

const MemberRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext)
    const [isMember] = useMember()
    const location = useLocation()
   if (loading) {
    <progress className="progress w-56"></progress>
   }
   if (isMember && user) {
    return children
   }
   return <Navigate to={'/'} state={{from:location}} replace></Navigate>
};

export default MemberRoute;