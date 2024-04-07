import React, { useContext, useState } from "react";
import { MultilevelContext } from "../context/MultilevelContext";
import Register from "./Register";
import CreateProfile from "./CreateProfile";
import RoleSelection from "./RoleSelection";

function MultiLevelForm() {
  const [currentStep, setCurrentStep] = useState(3);
  const { formData, setFormData } = useContext(MultilevelContext);

  const handleNextStep = () => {
    // Validate current step data before proceeding
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form
      className="container mx-auto h-[80vh] px-4 py-8 flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      {currentStep === 1 && (
        <Register
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
        />
      )}
      {currentStep === 2 && (
        <CreateProfile
          formData={formData}
          setFormData={setFormData}
          onPrevious={handlePrevStep}
          onNext={handleNextStep}
        />
      )}
      {currentStep === 3 && (
        <RoleSelection
          formData={formData}
          setFormData={setFormData}
          onPrevious={handlePrevStep}
        />
      )}
    </form>
  );
}

export default MultiLevelForm;
