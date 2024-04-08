import React from "react";

const FinalResult = ({ email, name }) => {
  return (
    <div className="w-screen h-[90vh] bg-zinc-700 flex flex-col justify-around items-center rounded-3xl">
      <h1 className=" text-white text-4xl">Thank you</h1>
      <h1 className="text-transparent text-4xl font-medium bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 bg-clip-text">
        {name}
      </h1>

      <h1 className="text-white text-xl">we will reach you through</h1>
      <h1 className="text-transparent text-4xl font-medium bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 bg-clip-text">
        {email}
      </h1>
    </div>
  );
};

export default FinalResult;
