import React from 'react';

function Step2({ formData, handleChange, departments, doctorsByDepartment, availableTimes }) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Choose Doctor & Date</h3>
        <p className="text-gray-600 text-xs">Select your preferred doctor and appointment time</p>
      </div>

      <div>
        <label className="block text-gray-700 text-xs font-medium mb-1">Department*</label>
        <select
          className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="selectedDepartment"
          value={formData.selectedDepartment}
          onChange={handleChange}
          required
        >
          <option value="">Select department</option>
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {formData.selectedDepartment && (
        <div>
          <label className="block text-gray-700 text-xs font-medium mb-1">Doctor*</label>
          <select
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="selectedDoctor"
            value={formData.selectedDoctor}
            onChange={handleChange}
            required
          >
            <option value="">Select doctor</option>
            {doctorsByDepartment[formData.selectedDepartment]?.map(doctor => (
              <option key={doctor} value={doctor}>{doctor}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className="block text-gray-700 text-xs font-medium mb-1">Appointment Date*</label>
        <input
          type="date"
          className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          required
        />
      </div>

      {formData.appointmentDate && (
        <div>
          <label className="block text-gray-700 text-xs font-medium mb-1">Available Time Slots*</label>
          <select
            className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          >
            <option value="">Select time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default Step2;