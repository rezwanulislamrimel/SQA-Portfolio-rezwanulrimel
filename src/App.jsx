import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import BlogQAPage from "./Pages/BlogQAPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Blog / SQA Q&A Page */}
        <Route path="/blog" element={<BlogQAPage />} />
      </Routes>
    </Router>
  );
}