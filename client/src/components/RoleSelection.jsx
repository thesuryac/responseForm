import React, { useContext, useEffect, useRef, useState } from "react";

import { Design, HireDesigner, Designer } from "../assets/index";
import { MultilevelContext } from "../context/MultilevelContext";
import Option from "./Option";

const RoleSelection = ({ onPrevious }) => {
  const { selectedRoles, setSelectedRoles, formData, setFormData } =
    useContext(MultilevelContext);

  const handleSelectionChange = (event) => {
    const role = event.target.value;
    console.log(role);

    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter((item) => item !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
    setFormData({ ...formData, roles: selectedRoles });
  };

  return (
    <div className="min-h-full p-5 w-auto sm:w-full flex flex-col justify-around items-center bg-zinc-700 rounded-lg">
      <h1 className=" font-extrabold text-2xl">Role Selection</h1>
      <div className="mt-20 flex flex-col justify-around items-center gap-40">
        <Option
          handleSelectionChange={handleSelectionChange}
          selectedRoles={selectedRoles}
          role={"designer"}
          image={Designer}
        />
        <Option
          handleSelectionChange={handleSelectionChange}
          selectedRoles={selectedRoles}
          role={"hireDesigner"}
          image={HireDesigner}
        />
        <Option
          handleSelectionChange={handleSelectionChange}
          selectedRoles={selectedRoles}
          role={"design"}
          image={Design}
        />
      </div>

      <div className="w-full p-2 flex mt-20  justify-around items-center">
        <button
          className="h-12 w-1/3 text-white bg-indigo-700 rounded-lg"
          onClick={onPrevious}
        >
          previous
        </button>
        <button
          className="h-12 w-1/3 text-white bg-indigo-700 rounded-lg"
          type="submit"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
