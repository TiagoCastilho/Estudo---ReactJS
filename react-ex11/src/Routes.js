import React from "react";
import { Routes, Route } from "react-router-dom";

import RequireAuth from "./helpers/RequireAuth";

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import NotFound from './pages/NotFound';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={
                <RequireAuth>
                    <About />
                </RequireAuth>
            } />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/ad/:id" element={<AdPage />} />
            <Route path="/post-an-ad" element={
                <RequireAuth>
                    <AddAd />
                </RequireAuth>    
            } />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}