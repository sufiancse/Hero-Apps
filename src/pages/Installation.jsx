import React from "react";

const Installation = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto px-5">
      <div className="text-center mb-10">
        <h1 className="font-bold text-5xl text-[#001931] mb-4">
          Our All Applications
        </h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-[#001931] font-semibold text-2xl">1 Apps Found</p>
        <label className="">
          <select className="select select-border bg-gray-100" >
            <option value="none">Sort By Size</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Installation;
