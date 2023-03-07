import React from 'react';
import Navbar from '../section/Navbar';
import Footer from '../section/Footer';
//import Test from '../section/test';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout