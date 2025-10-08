import { DownloadIcon, StarIcon, ThumbsUp } from "lucide-react";
import app from "../assets/demo-app (1).webp";

const AppDetails = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 md:my-20">
      <div className="flex flex-col md:flex-row  items-center gap-10">
        <div className="max-w-[350px] bg-white">
          <img src={app} className="w-full object-cover" alt="" />
        </div>
        <div className="flex-1 text-center md:text-start">
          <h1 className="font-bold text-3xl text-[#001931] ">
            SmPlan:ToDo List with Reminder
          </h1>
          <p className="text-xl text-[#627382]">
            Developed by{" "}
            <span className="font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              productive.io
            </span>
          </p>

          <div className="divider"></div>

          <div className="flex justify-center items-center md:justify-start mb-5 gap-6 md:gap-20">
            <div className="text-center flex flex-col items-start  space-y-1">
              <span>
                <DownloadIcon></DownloadIcon>
              </span>
              <p className="text-[#001931]">Downloads</p>
              <h1 className="text-[#001931] font-bold text-4xl">8M</h1>
            </div>
            <div className="text-center flex flex-col items-start space-y-1">
              <span>
                <StarIcon></StarIcon>
              </span>
              <p className="text-[#001931]">Average Ratings</p>
              <h1 className="text-[#001931] font-bold text-4xl">4.9</h1>
            </div>
            <div className="text-center flex flex-col items-start space-y-1">
              <span>
                <ThumbsUp></ThumbsUp>
              </span>
              <p className="text-[#001931]">Total Reviews</p>
              <h1 className="text-[#001931] font-bold text-4xl">54K</h1>
            </div>
          </div>
          <button className="btn font-semibold text-xl text-white bg-green-500">
            Install Now (291 MB)
          </button>
        </div>
      </div>

      <div className="divider"></div>

      <div>
        <h1 className="font-semibold text-2xl text-[#001931]">Description</h1>
        <p className="text-[#627382]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, nobis? Iusto modi quos libero suscipit? Ab nostrum atque dignissimos earum omnis, autem laborum iusto sequi, eaque nemo quaerat commodi vitae.</p>
      </div>
    </div>
  );
};

export default AppDetails;
