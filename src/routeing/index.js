import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../account/login'
import Home from '../pages/home'
import ProtectedRoutes from '../protectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Routeing = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    {/* Protected routes here  */}
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/home" element={<Home />} />
                    </Route>

                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    )
}
export default Routeing;