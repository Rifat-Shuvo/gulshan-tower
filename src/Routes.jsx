import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from './Layout/Root';
import Apartment from './Pages/Apartment/Apartment';
import Home from './Pages/Home/Home';
import Login from './Pages/Entry/Login';
import Register from './Pages/Entry/Register';
import Dashboard from './Layout/Dashboard';
import Profile from './Pages/DashboardPages/Profile';
import Anounce from './Pages/DashboardPages/Anounce';
import Payment from './Pages/DashboardPages/Payment';
import History from './Pages/DashboardPages/History';
import ManageM from './Pages/DashboardPages/ManageM';
import Agree from './Pages/DashboardPages/Agree';
import Cupon from './Pages/DashboardPages/Cupon';
import PrivateRoute from './Providers/PrivateRoute';
import MakeAnounce from './Pages/DashboardPages/MakeAnounce';
import AdminProfile from './Pages/DashboardPages/AdminProfile';
import Error from './Components/Error';
import AdminRoute from './Providers/AdminRoute';
import MemberRoute from './Providers/MemberRoute';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'apartment',
                element: <Apartment></Apartment>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: 'anounce',
                element: <PrivateRoute><Anounce></Anounce></PrivateRoute>
            },
            {
                path: 'payment',
                element: <MemberRoute><Payment></Payment></MemberRoute>
            },
            {
                path: 'history',
                element: <MemberRoute><History></History></MemberRoute>
            },
            {
                path: 'adminprofile',
                element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path: 'manage',
                element:<AdminRoute><ManageM></ManageM></AdminRoute>
            },
            {
                path: 'agreement',
                element: <AdminRoute><Agree></Agree></AdminRoute>
            },
            {
                path: 'makeanounce',
                element: <AdminRoute><MakeAnounce></MakeAnounce></AdminRoute>
            },
            {
                path: 'cupons',
                element: <Cupon></Cupon>
            }
        ]
    }
])

export default Routes;