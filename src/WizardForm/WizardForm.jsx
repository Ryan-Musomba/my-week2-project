import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import "./styles.css";

function WizardProgress({ step }) {
  const stepLabels = ["Service", "Doctor", "Details", "Confirm", "Complete"];
  return (
    <div className="mb-4 font-sans">
      <div className="flex items-center justify-between">
        {[1, 2, 3, 4, 5].map((stepNumber) => (
          <div key={stepNumber} className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold ${
                step >= stepNumber
                  ? "bg-blue-600 text-white border border-blue-700"
                  : "bg-gray-100 text-gray-600 border border-gray-300"
              }`}
            >
              {stepNumber}
            </div>
            <div className="mt-1 text-xs text-gray-600">
              {stepLabels[stepNumber - 1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const departments = [
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
];

const doctorsByDepartment = {
  Cardiology: ["Dr. Smith", "Dr. Johnson", "Dr. Williams"],
  Neurology: ["Dr. Brown", "Dr. Davis"],
  Pediatrics: ["Dr. Miller", "Dr. Wilson"],
  Orthopedics: ["Dr. Moore", "Dr. Taylor"],
  Dermatology: ["Dr. Anderson", "Dr. Thomas"],
};

const availableTimes = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const paymentOptions = [
  "Credit/Debit Card",
  "Insurance",
  "Cash",
  "Bank Transfer",
];

const initialFormState = {
  consultationType: "",
  serviceDetails: "",

  selectedDepartment: "",
  selectedDoctor: "",
  appointmentDate: "",
  appointmentTime: "",

  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  phone: "",
  medicalHistory: "",

  paymentMethod: "",
  receiveConfirmation: true,
};

function WizardForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.consultationType) return;
    if (
      step === 2 &&
      (!formData.selectedDepartment ||
        !formData.selectedDoctor ||
        !formData.appointmentDate)
    )
      return;
    if (
      step === 3 &&
      (!formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.phone)
    )
      return;
    if (step === 4 && !formData.paymentMethod) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setFormData(initialFormState);
    setStep(1);
    setShowSuccess(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            departments={departments}
            doctorsByDepartment={doctorsByDepartment}
            availableTimes={availableTimes}
          />
        );
      case 3:
        return <Step3 formData={formData} handleChange={handleChange} />;
      case 4:
        return (
          <Step4
            formData={formData}
            handleChange={handleChange}
            paymentOptions={paymentOptions}
          />
        );
      case 5:
        return <Step5 formData={formData} />;
      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    switch (step) {
      case 1:
        return !formData.consultationType;
      case 2:
        return (
          !formData.selectedDepartment ||
          !formData.selectedDoctor ||
          !formData.appointmentDate
        );
      case 3:
        return (
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.phone
        );
      case 4:
        return !formData.paymentMethod;
      default:
        return false;
    }
  };

  return (
    <div className="wizard-form font-sans">
      <h1 className="text-lg font-bold text-center text-gray-800 mb-1">
        Medical Appointment
      </h1>
      <p className="text-center text-gray-600 mb-4 text-sm">
        Complete all steps to schedule
      </p>

      <WizardProgress step={step} />

      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
        {renderStep()}
      </div>

      <div className="mt-4 flex justify-between">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded transition-colors duration-200 flex items-center"
          >
            Back
          </button>
        )}
        {step < 5 ? (
          <button
            onClick={handleNext}
            className={`px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded transition-colors duration-200 ml-auto flex items-center ${
              isNextDisabled()
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
            disabled={isNextDisabled()}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded transition-colors duration-200 ml-auto flex items-center"
          >
            Confirm
          </button>
        )}
      </div>

      {showSuccess && (
        <div className="success-overlay font-sans">
          <div className="success-message">
            <h3 className="text-lg font-bold">Success!</h3>
            <p className="text-base">Appointment scheduled successfully!</p>
            <button
              onClick={handleCloseSuccess}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WizardForm;
