import React from 'react';

const consultationTypes = [
  "General Consultation",
  "Specialist Consultation",
  "Dental Checkup",
  "Eye Examination",
  "Physical Therapy"
];

function Step1({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Service Selection</h3>
        <p className="text-gray-600 text-xs">Choose the type of service you need</p>
      </div>

      <div>
        <label className="block text-gray-700 text-xs font-medium mb-1">Type of Consultation*</label>
        <select
          className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="consultationType"
          value={formData.consultationType}
          onChange={handleChange}
          required
        >
          <option value="">Select consultation type</option>
          {consultationTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {formData.consultationType && (
        <div>
          <label className="block text-gray-700 text-xs font-medium mb-1">Service Details (Optional)</label>
          <textarea
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="serviceDetails"
            value={formData.serviceDetails}
            onChange={handleChange}
            placeholder="Please describe your symptoms or concerns"
            rows="3"
          />
        </div>
      )}
    </div>
  );
}

export default Step1;