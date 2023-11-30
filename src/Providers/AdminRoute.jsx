import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const location = useLocation()
   if (loading) {
    <progress className="progress w-56"></progress>
   }
   if (isAdmin && user) {
    return children
   }
   return <Navigate to={'/'} state={{from:location}} replace></Navigate>
};

export default AdminRoute;