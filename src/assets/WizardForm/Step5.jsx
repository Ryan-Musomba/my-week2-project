import React from 'react';

function Step5({ formData }) {
  return (
    <div className="space-y-4 text-center">
      <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <h3 className="text-lg font-bold text-gray-800">Appointment Confirmed!</h3>
      <p className="text-gray-600 text-sm">Your appointment details have been saved.</p>
      
      <div className="bg-gray-50 p-3 rounded-lg mt-4 text-left text-xs">
        <h4 className="font-bold mb-2">Appointment Summary</h4>
        <p><span className="text-gray-600 font-medium">Service:</span> {formData.consultationType}</p>
        {formData.serviceDetails && <p><span className="text-gray-600 font-medium">Details:</span> {formData.serviceDetails}</p>}
        <p><span className="text-gray-600 font-medium">Doctor:</span> {formData.selectedDoctor}</p>
        <p><span className="text-gray-600 font-medium">Date:</span> {formData.appointmentDate}</p>
        <p><span className="text-gray-600 font-medium">Time:</span> {formData.appointmentTime}</p>
        <p><span className="text-gray-600 font-medium">Patient:</span> {formData.firstName} {formData.lastName}</p>
        <p><span className="text-gray-600 font-medium">Payment Method:</span> {formData.paymentMethod}</p>
      </div>
    </div>
  );
}

export default Step5;