import React from 'react';

function Step4({ formData, handleChange, paymentOptions }) {
  return (
    <div className="space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Confirmation & Payment</h3>
        <p className="text-gray-600 text-xs">Review your appointment details</p>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg mb-3">
        <h4 className="font-bold text-gray-800 text-xs mb-2">Appointment Summary</h4>
        <div className="space-y-1 text-xs">
          <p><span className="text-gray-600 font-medium">Service:</span> {formData.consultationType}</p>
          {formData.serviceDetails && <p><span className="text-gray-600 font-medium">Details:</span> {formData.serviceDetails}</p>}
          <p><span className="text-gray-600 font-medium">Doctor:</span> {formData.selectedDoctor}</p>
          <p><span className="text-gray-600 font-medium">Department:</span> {formData.selectedDepartment}</p>
          <p><span className="text-gray-600 font-medium">Date:</span> {formData.appointmentDate}</p>
          <p><span className="text-gray-600 font-medium">Time:</span> {formData.appointmentTime}</p>
          <p><span className="text-gray-600 font-medium">Patient:</span> {formData.firstName} {formData.lastName}</p>
        </div>
      </div>

      <div>
        <label className="block text-gray-700 text-xs font-medium mb-1">Payment Method*</label>
        <select
          className="w-full px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select payment method</option>
          {paymentOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          id="receiveConfirmation"
          name="receiveConfirmation"
          checked={formData.receiveConfirmation}
          onChange={handleChange}
          className="mr-2 h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="receiveConfirmation" className="text-xs text-gray-700">
          Receive confirmation email
        </label>
      </div>
    </div>
  );
}

export default Step4;