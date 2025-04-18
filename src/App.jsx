import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Analytics from "./components/Analytics";
import ModelPerformance from "./components/ModelPerformance";
import MedicalUse from "./components/MedicalUse";
import Dataset from "./components/Dataset";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1 className="header-title">EEG Stress Analysis</h1>
          <nav className="nav-links">
            <Link to="/analytics" className="nav-link">Analytics</Link>
            <Link to="/model" className="nav-link">Model Performance</Link>
            <Link to="/medical" className="nav-link">Medical Use</Link>
            <Link to="/dataset" className="nav-link">Dataset</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/model" element={<ModelPerformance />} />
            <Route path="/medical" element={<MedicalUse />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="*" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
