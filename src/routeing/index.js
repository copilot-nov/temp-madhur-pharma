import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from '../account/login'
import Home from '../pages/home'
import ProtectedRoutes from '../protectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Production from '../pages/production';
import ProductionDetail from '../pages/productionDetail';

const Routeing = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/production" element={<Production />} />
                    </Route>
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/production/:id" element={<ProductionDetail />} />
                    </Route>
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