import React from 'react';
import './modelPerformance.css';
import confusion from '../assets/confusion_matrix.png';
import roc from '../assets/roc_curve.png';
import report from '../assets/classification_report.png';

export default function ModelPerformance() {
  return (
    <div className="performance-container">
      <h2 className="performance-title">Model Performance</h2>
      <p className="performance-subtitle">
        Visual insights into the classification performance of our EEG-based stress detection model.
      </p>

      <div className="metrics-grid">
        <div className="metric-box">
          <h3>Confusion Matrix</h3>
          <img src={confusion} alt="Confusion Matrix" className="metric-image" />
        </div>

        <div className="metric-box">
          <h3>ROC Curve</h3>
          <img src={roc} alt="ROC Curve" className="metric-image" />
        </div>

        <div className="metric-box">
          <h3>Classification Report</h3>
          <img src={report} alt="Classification Report" className="metric-image" />
        </div>
      </div>
    </div>
  );
}
