import React from 'react';
import { Outlet } from 'react-router-dom';
import Content from '../Components/Content';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            
            <Content>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </Content>
        </div>
    );
};

export default Root;