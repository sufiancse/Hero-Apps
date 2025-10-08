import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[50vh]">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loading;
