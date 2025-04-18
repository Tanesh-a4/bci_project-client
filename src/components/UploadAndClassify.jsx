import React, { useState } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

export default function UploadAndClassify() {
  const [file, setFile] = useState(null);
  const [graphs, setGraphs] = useState({});
  const [features, setFeatures] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await axios.post('https://bci-project-server.onrender.com/process', formData);
    setGraphs(res.data.graphs);
    setFeatures(res.data.features);
    setPrediction(res.data.prediction);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl">
      <h1 className="text-xl font-bold mb-4">EEG Stress Classification</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Upload & Analyze</button>

      {graphs.time && <Plot data={[graphs.time]} layout={{ title: 'Time Domain' }} />}
      {graphs.freq && <Plot data={[graphs.freq]} layout={{ title: 'Frequency Domain (FFT)' }} />}
      {graphs.filtered && <Plot data={[graphs.filtered]} layout={{ title: 'Filtered Signal (Beta Band)' }} />}

      {features && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Extracted Features:</h2>
          <pre className="bg-gray-100 p-2 mt-2 overflow-x-auto text-sm">{JSON.stringify(features, null, 2)}</pre>
        </div>
      )}

      {prediction && (
        <div className="mt-4 text-xl font-bold text-green-600">
          Prediction: {prediction}
        </div>
      )}
    </div>
  );
}
