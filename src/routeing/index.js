import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from '../pages/home'
import Login from '../account/login'
// import Navbar from '../components/navbar';
// const checkAuth = true

const Routeing = () => {
    // const [checkAuth, setCheckOut] = useState()

    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routeing;