import React, { useState, useEffect } from 'react';

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage"; // Import the AboutPage

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project/:projectId" element={<ProjectPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} /> {/* Add AboutPage route */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;