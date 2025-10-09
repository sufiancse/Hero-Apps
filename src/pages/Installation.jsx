import React, { useState } from "react";
import InstallationCard from "../components/InstallationCard";
import { loadInstallationList } from "../storage/localStorage";
import { Link } from "react-router";
import useApps from "../hooks/useApps";
import Loading from "../components/Loading";

const Installation = () => {
  const {load} = useApps()
  const [installedList, setInstalledList] = useState(() =>
    loadInstallationList()
  );
  const [sort, setSort] = useState("none");
  if(load) return <Loading></Loading>

  if (!installedList.length)
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <p className="font-bold text-3xl text-center text-gray-400">
          {" "}
          No Data Available
        </p>{" "}
        <div className="flex justify-center items-center mt-10">
          <Link to={'/apps'}>
            <button className="px-20 btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
              See All Apps
            </button>
          </Link>
        </div>
      </div>
    );

  const sortedItem = (() => {
    if (sort === "low-to-high") {
      return [...installedList].sort((a, b) => a.downloads - b.downloads);
    }
    if (sort === "high-to-low") {
      return [...installedList].sort((a, b) => b.downloads - a.downloads);
    }
    return installedList;
  })();

  return (
    <div className="my-10 max-w-7xl mx-auto px-5">
      <div className="text-center mb-10">
        <h1 className="font-bold text-5xl text-[#001931] mb-4">
          Your Installed Apps
        </h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-[#001931] font-semibold text-2xl">
          {sortedItem.length} Apps Found
        </p>
        <label className="">
          <select
            className="select select-border bg-gray-100"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="high-to-low">High-Low</option>
            <option value="low-to-high">Low-High</option>
          </select>
        </label>
      </div>

      {sortedItem.map((installedApps) => (
        <InstallationCard
          key={installedApps.id}
          installedApps={installedApps}
          setInstalledList={setInstalledList}
        ></InstallationCard>
      ))}
    </div>
  );
};

export default Installation;
