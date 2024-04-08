import React, { useRef } from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

const Option = ({ handleSelectionChange, selectedRoles, role, image }) => {
  const inputRef = useRef();
  return (
    <div
      className={` w-auto h-auto sm:w-96 sm:h-96 p-2 rounded-lg bg-indigo-600 flex flex-col items-center justify-center ${
        selectedRoles.includes(role)
          ? "scale-110 transition-all transition-duration-300"
          : "transition-all transition-duration-300"
      } `}
    >
      <label
        htmlFor={role}
        className="flex flex-col justify-center items-center"
      >
        <div className="j-40 w-40 sm:h-56 sm:w-56 flex justify-center items-center">
          <img
            src={image}
            className={`h-40 w-40 sm:h-56 sm:w-56 rounded-lg shadow-2xl ${
              selectedRoles.includes(role)
                ? "transform translate-y-[-40px] transition-all transition-duration-300 border-4"
                : "transition-all transition-duration-300"
            } `}
            alt=""
          />
        </div>
        <div className="w-full">
          {selectedRoles.includes(role) && (
            <h1 className="text-sm transform translate-y-[-20px] transition transition-duration-300 ">
              We're looking for passionate designers to showcase their work on
              our platform! Expand your reach and get your design work seen by a
              wider audience. Apply to be a featured designer today and connect
              with potential clients!
            </h1>
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="mt-10 transform translate-y-[-20px] transition transition-duration-300">
            I'm looking for designer looking to share my work
          </h1>

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
            <FaCheckCircle
              style={{ color: "green" }}
              className="bg-white rounded-full"
            />
          )}
          {!selectedRoles.includes(role) && (
            <FaCircle
              style={{ color: "white" }}
              className="bg-white rounded-full"
            />
          )}
        </div>
      </label>
    </div>
  );
};

export default Option;
