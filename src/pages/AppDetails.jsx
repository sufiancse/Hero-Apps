import { DownloadIcon, StarIcon, ThumbsUp } from "lucide-react";
import app from "../assets/demo-app (1).webp";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import Barchart from "../components/Barchart";
import Loading from "../components/Loading";
import ErrorApps from "./ErrorApps";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, load } = useApps();

  if (load) return <Loading></Loading>;

  const appDetails = apps.find((app) => app.id === Number(id));

  if (!appDetails && !load) return <ErrorApps></ErrorApps>;

  const {
    image,
    title,
    companyName,
    downloads,
    reviews,
    ratingAvg,
    size,
    description,
    ratings,
  } = appDetails || "";

  const formattingNumbers = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  };

  return (
    <div className="max-w-7xl mx-auto my-10 md:my-20 px-5 md:px-0">
      <div className="flex flex-col md:flex-row  items-center gap-10">
        <div className="max-w-[350px] bg-white">
          <img src={image} className="w-full object-cover" alt="" />
        </div>
        <div className="flex-1 text-center md:text-start">
          <h1 className="font-bold text-3xl text-[#001931] ">{title}</h1>
          <p className="text-xl text-[#627382]">
            Developed by{" "}
            <span className="font-bold bg-gradient-to-br from-[#331d67] to-[#9F62F2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>

          <div className="divider"></div>

          <div className="flex justify-center items-center md:justify-start mb-5 gap-6 md:gap-20">
            <div className="text-center flex flex-col items-start  space-y-1">
              <span>
                <DownloadIcon></DownloadIcon>
              </span>
              <p className="text-[#001931]">Downloads</p>
              <h1 className="text-[#001931] font-bold text-4xl">
                {formattingNumbers(downloads)}
              </h1>
            </div>
            <div className="text-center flex flex-col items-start space-y-1">
              <span>
                <StarIcon></StarIcon>
              </span>
              <p className="text-[#001931]">Average Ratings</p>
              <h1 className="text-[#001931] font-bold text-4xl">{ratingAvg}</h1>
            </div>
            <div className="text-center flex flex-col items-start space-y-1">
              <span>
                <ThumbsUp></ThumbsUp>
              </span>
              <p className="text-[#001931]">Total Reviews</p>
              <h1 className="text-[#001931] font-bold text-4xl">
                {formattingNumbers(reviews)}
              </h1>
            </div>
          </div>
          <button className="btn font-semibold text-xl text-white bg-green-500">
            Install Now ({size} MB)
          </button>
        </div>
      </div>

      <div className="divider"></div>

      <h1 className="text-[#001931] font-semibold text-2xl mb-4">Ratings</h1>
      <Barchart ratings={ratings}></Barchart>

      <div>
        <h1 className="font-semibold text-2xl text-[#001931]">Description</h1>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
