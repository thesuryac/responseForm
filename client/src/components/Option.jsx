import React, { useRef } from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const Option = ({ handleSelectionChange, selectedRoles, role, image }) => {
  const inputRef = useRef();
  return (
    <div>
      <label htmlFor={role} >
        <div className="">
          <div className="h-96 w-96">
            <img
              src={image}
              className={`h-full w-full ${
                selectedRoles.includes({ role })
                  ? "transform translate-y-[-70px]"
                  : ""
              } `}
              alt=""
            />
          </div>
          <div className="">
            {selectedRoles.includes(role) && (
              <h1>
                We're looking for passionate designers to showcase their work on
                our platform! Expand your reach and get your design work seen by
                a wider audience. Apply to be a featured designer today and
                connect with potential clients!
              </h1>
            )}
          </div>
          I'm looking for designer looking to share my work
          <input
            type="checkbox"
            id={role}
            name={role}
            value={role}
            ref={inputRef}
            checked={selectedRoles.includes(role)}
            onChange={handleSelectionChange}
            hidden
          />
          {selectedRoles.includes(role) && (
            <FaCheckCircle className="checkmark" />
          )}
          {!selectedRoles.includes(role) && <FaCircle className="checkmark" />}
        </div>
      </label>
    </div>
  );
};

export default Option;
