import React, { useEffect, useState } from "react";

const Register = ({ onNext, formData, setFormData }) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Check if all fields are filled after each change
    setIsButtonEnabled(
      formData.name && formData.username && formData.password && formData.email
    );
  };
  useEffect(() => {
    setIsButtonEnabled(
      formData.name && formData.username && formData.password && formData.email
    );
  }, [isButtonEnabled]);
  return (
    <div className="h-full w-full border border-blue-800 flex flex-col justify-evenly bg-slate-800">
      <h1 className="text-white mx-auto">Register</h1>
      <div className="h-[60%] w-[60%] mx-auto flex flex-col justify-evenly">
        <input
          type="text"
          className="h-12 p-2 rounded-lg"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className="h-12 p-2 rounded-lg"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          className="h-12 p-2 rounded-lg"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="email"
          className="h-12 p-2 rounded-lg"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-around items-center">
        {!isButtonEnabled ? (
          <button
            className={`h-12 w-96 bg-indigo-700 rounded-lg cursor-not-allowed ${
              !isButtonEnabled && "opacity-50"
            }`}
            onClick={() => onNext(formData)} // Pass form data to onSubmit handler
            disabled
          >
            Fill the form
          </button>
        ) : (
          <button
            className={`h-12 w-96 bg-indigo-700 rounded-lg`}
            onClick={() => onNext(formData)} // Pass form data to onSubmit handler
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Register;
