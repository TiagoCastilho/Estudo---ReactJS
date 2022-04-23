import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    );
}