import AppsCard from "./AppsCard";
import useApps from "../hooks/useApps";
import Loading from "./Loading";
import { Link } from "react-router";

const TrendingApps = () => {
  const { apps, load } = useApps();
  const homePageApps = apps.splice(0, 8);

  return (
    <div className="my-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="font-bold text-5xl text-[#001931] mb-4">
          Trending Apps
        </h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {load ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {homePageApps.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center mt-10">
        <Link to={"/apps"}>
          <button className="px-20 btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
            See All Apps
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
