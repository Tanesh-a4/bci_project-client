import React from 'react'
import './Dataset.css'

export default function Dataset() {
  return (
    <div className="dataset-container">
      <h2 className="dataset-title">SAM-40 Dataset</h2>

      <p className="dataset-description">
        The SAM-40 dataset is a publicly available EEG dataset focused on analyzing stress levels in individuals using various mental tasks and emotional stimuli.
      </p>

      <div className="dataset-section">
        <h3>📌 Key Details:</h3>
        <ul className="dataset-list">
          <li><strong>Full Name:</strong> Stress Analysis using Mental tasks (SAM-40)</li>
          <li><strong>Subjects:</strong> 40 healthy participants</li>
          <li><strong>Channels:</strong> 32-channel EEG using the 10-20 system</li>
          <li><strong>Sampling Rate:</strong> 512 Hz</li>
          <li><strong>Duration:</strong> Each session lasted approximately 25–30 minutes</li>
          <li><strong>Tasks Included:</strong> Arithmetic, Stroop Test, and Relaxation Phases</li>
          <li><strong>Labels:</strong> Stress vs No-Stress annotated using physiological indicators</li>
          <li><strong>Format:</strong> MATLAB (.mat) files</li>
          <li><strong>Preprocessing:</strong> Bandpass filtered, artifact removal, normalized</li>
          <li><strong>Applications:</strong> Emotion detection, stress classification, BCI training</li>
        </ul>
      </div>

      

      <div className="dataset-section">
        <h3>🔗 Source:</h3>
        <p>
          Available on [OpenNeuro / IEEE Dataport / PhysioNet] depending on source.
        </p>
      </div>
    </div>
  )
}
