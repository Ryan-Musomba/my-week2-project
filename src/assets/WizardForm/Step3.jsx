import React from 'react';

function Step3({ formData, handleChange }) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Patient Details</h3>
        <p className="text-gray-600 text-xs">Enter your personal information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="block text-gray-700 text-xs font-medium mb-1">First Name*</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-xs font-medium mb-1">Middle Name</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 text-xs font-medium mb-1">Last Name*</label>
          <input
            type="text"
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-gray-700 text-xs font-medium mb-1">Email*</label>
          <input
            type="email"
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-xs font-medium mb-1">Phone*</label>
          <input
            type="tel"
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 text-xs font-medium mb-1">Medical History (Optional)</label>
        <textarea
          className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleChange}
          placeholder="Any previous conditions, allergies, or medications"
          rows="3"
        />
      </div>
    </div>
  );
}

export default Step3;