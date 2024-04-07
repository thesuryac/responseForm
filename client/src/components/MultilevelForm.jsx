import React, { useContext, useState } from "react";
import { MultilevelContext } from "../context/MultilevelContext";
import Register from "./Register";
import CreateProfile from "./CreateProfile";
import RoleSelection from "./RoleSelection";
import FinalResult from "./FinalResult";

function MultiLevelForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const { formData, setFormData } = useContext(MultilevelContext);
  const [ok, setOk] = useState(false);

  const handleNextStep = () => {
    // Validate current step data before proceeding
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setOk(true);
        setCurrentStep(4);
        console.log("yess");
      }
    } catch (error) {
      console.log(error);
    }

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
      {ok && currentStep === 4 && <FinalResult email={formData.email} />}
    </form>
  );
}

export default MultiLevelForm;
