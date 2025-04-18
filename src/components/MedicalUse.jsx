import React from 'react';

export default function MedicalUse() {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Medical Relevance of EEG Stress Detection</h2>
      <p className="mb-4">
        EEG stress detection through arithmetic-based brain activity analysis offers insights into how a healthy brain reacts to cognitive load. This can be compared against neurological patients
        with diminished cognitive function to tailor therapies that encourage brain stimulation.
      </p>
      <p className="mb-4">
        For instance, by understanding the stress profiles of normal individuals during mental tasks, clinicians can adjust training for patients with stroke, dementia, or ADHD to gradually build similar
        activity patterns and improve mental resilience.
      </p>
      <p className="mb-4">
        The system may also help in early detection of neurodegenerative conditions by observing abnormal stress responses during cognitive tasks.
      </p>
    </div>
  );
}
