import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import { Register } from './Pages/Register';
import { Adminpage } from './Pages/Admin';

const Application = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/admin" element={<Adminpage />} />
            </Routes>
        </Router>
    );
}

export default Application;