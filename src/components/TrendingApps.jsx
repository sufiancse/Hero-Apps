import React from "react";
import AppsCard from "./AppsCard";

const TrendingApps = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="font-bold text-5xl text-[#001931] mb-4">Trending Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <AppsCard></AppsCard>
    </div>
  );
};

export default TrendingApps;
