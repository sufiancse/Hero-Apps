import { useEffect, useState } from "react";
import AppsCard from "../components/AppsCard";
import Loading from "../components/Loading";
import useApps from "../hooks/useApps";

const Apps = () => {
  const { apps, load } = useApps();
  const [search, setSearch] = useState("");

  const [isSearching, setIsSearching] = useState(false);
  const [filteredApps, setFilteredApps] = useState(apps);

  useEffect(() => {
    if (!apps || !apps.length) return;

    setIsSearching(true);
    const delay = setTimeout(() => {
      const searchValue = search.trim().toLowerCase();
      const searchApps = searchValue
        ? apps.filter((app) => app.title.toLowerCase().includes(searchValue))
        : apps;

      setFilteredApps(searchApps);
      setIsSearching(false);
    }, 500);
    return () => clearTimeout(delay)
  }, [apps,search]);

  // const searchValue = search.trim().toLowerCase();

  // const searchApps = searchValue
  //   ? apps.filter((app) => app.title.toLowerCase().includes(searchValue))
  //   : apps;

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

      <div className="flex justify-between items-center mb-6">
        <p className="text-[#001931] font-semibold text-2xl">
          ({filteredApps.length}) Apps Found
        </p>
        <label className="input bg-gray-100">
          <input
            type="search"
            name=""
            id=""
            placeholder="search apps"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {load || isSearching ? (
        <Loading></Loading>
      ) : !filteredApps.length ? (
        <div>
          <p className="font-bold text-3xl text-center text-gray-400">
            {" "}
            No Apps Found
          </p>{" "}
          <div className="flex justify-center items-center mt-10">
            <button
              onClick={() => setSearch("")}
              className="px-20 btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
            >
              See All Apps
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {filteredApps.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
