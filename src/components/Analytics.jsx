import React, { useState } from 'react'
import axios from 'axios'
import Plot from 'react-plotly.js'
import './Analytics.css'

export default function Analytics() {
  const [file, setFile] = useState(null)
  const [graphs, setGraphs] = useState({})
  const [features, setFeatures] = useState(null)
  const [prediction, setPrediction] = useState(null)

  const handleFileChange = (e) => setFile(e.target.files[0])

  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await axios.post('https://bci-project-server.onrender.com/process', formData,{headers: {
    "Content-Type": "multipart/form-data",
  },})
      
      setGraphs(res.data.graphs)
      setFeatures(res.data.features)
      setPrediction(res.data.prediction)
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  const renderGraph = (title, graphData, xLabelWithUnit, yLabelWithUnit) => {
    const isFFT = title.toLowerCase().includes('frequency') || title.toLowerCase().includes('fft')

    const xaxis = isFFT
      ? {
          title: {
            text: xLabelWithUnit,
            font: { size: 14 },
            standoff: 10,
          },
        }
      : {
          title: {
            text: xLabelWithUnit,
            font: { size: 14 },
            standoff: 10,
          },
          tickvals: graphData.x ? graphData.x.slice(0, 10) : null, // Dynamic tick values
        }

    return (
      <div className="graph-container">
        <div className="graph-wrapper">
          <div className="graph-box">
            <h2 className="graph-heading">{title}</h2>
            <Plot
              data={[
                {
                  x: graphData.x,
                  y: graphData.y,
                  type: 'scatter',
                  mode: 'lines',
                  line: { shape: 'spline', color: '#007bff' },
                },
              ]}
              layout={{
                xaxis,
                yaxis: {
                  title: {
                    text: yLabelWithUnit,
                    font: { size: 14 },
                    standoff: 10,
                  },
                },
                margin: { t: 20, l: 50, r: 20, b: 50 },
              }}
              config={{ scrollZoom: true, displayModeBar: true }}
            />
          </div>
        </div>
      </div>
    )
  }
  const renderHeatmap = (title, heatmapData, xLabelWithUnit, yLabelWithUnit) => {
    return (
      <div className="graph-container">
        <div className="graph-wrapper">
          <div className="graph-box">
            <h2 className="graph-heading">{title}</h2>
            <Plot
              data={[
                {
                  z: heatmapData.z,
                  x: heatmapData.x,
                  y: heatmapData.y,
                  type: 'heatmap',
                  colorscale: 'Viridis', // Color scheme
                },
              ]}
              layout={{
                xaxis: {
                  title: { text: xLabelWithUnit, font: { size: 14 }, standoff: 10 },
                },
                yaxis: {
                  title: { text: yLabelWithUnit, font: { size: 14 }, standoff: 10 },
                },
                margin: { t: 20, l: 50, r: 20, b: 50 },
                title: '',
              }}
              config={{ scrollZoom: true, displayModeBar: true }}
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="analytics-container">
      <h1 className="analytics-title">EEG-Based Stress Analysis</h1>

      <div className="upload-section">
        <input type="file" onChange={handleFileChange} className="upload-input" />
        <button onClick={handleUpload} className="upload-button">
          Upload & Analyze
        </button>
      </div>

      <div className="analytics-graphs">
        {graphs.time &&
          renderGraph('Time Domain Signal', graphs.time, 'Time (s)', 'Amplitude (μV)')}

        {graphs.freq &&
          renderGraph('Frequency Domain (FFT)', graphs.freq, 'Frequency (Hz)', 'Magnitude (μV)')}

        {graphs.filtered &&
          renderGraph('Bandpass Filtered Signal (13–30 Hz)', graphs.filtered, 'Time (s)', 'Amplitude (μV)')}
        {graphs.wavelet &&
        renderHeatmap('Wavelet Heatmap', graphs.wavelet, 'Time (s)', 'Frequency (Hz)')}
      </div>

      {prediction && (
        <div className="prediction-box">Final Prediction: {prediction}</div>
      )}
    </div>
  )
}
