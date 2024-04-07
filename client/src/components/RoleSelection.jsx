import React, { useContext, useRef, useState } from "react";

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
    <div className="flex">
      {selectedRoles.map((ele) => {
        return <p>{ele}</p>;
      })}
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

      <div className="flex justify-around items-center">
        <button
          className="h-12 w-96 bg-indigo-700 rounded-lg"
          onClick={onPrevious}
        >
          previous
        </button>
        <button className="h-12 w-96 bg-indigo-700 rounded-lg" type="submit">
          Finish
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
