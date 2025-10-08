import { DownloadIcon, StarIcon } from "lucide-react";
import cardImg from "../assets/demo-app (1).webp";
import { Link } from "react-router";

const AppsCard = () => {
  return (
    <div className="grid grid-cols-4 gap-5 ">
      <Link to={'/app-details/sf'}>
        <div className="card bg-base-100 border shadow-sm p-4">
          <figure className="h-[300px] overflow-hidden">
            <img
              src={cardImg}
              className="w-full object-cover rounded-xl"
              alt="Shoes"
            />
          </figure>
          <div className="">
            <h2 className="card-title my-4">Forest: Focus for Productivity</h2>

            <div className="card-actions justify-between">
              <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#00D390] ">
                <DownloadIcon></DownloadIcon> Fashion
              </div>
              <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#FF8811] ">
                <StarIcon></StarIcon>
                Products
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="card bg-base-100 border shadow-sm ">
        <figure className="h-48 overflow-hidden">
          <img src={cardImg} className="w-full object-cover" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Forest: Focus for Productivity</h2>

          <div className="card-actions justify-between">
            <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#00D390] ">
              <DownloadIcon></DownloadIcon> Fashion
            </div>
            <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#FF8811] ">
              <StarIcon></StarIcon>
              Products
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 border shadow-sm ">
        <figure className="h-48 overflow-hidden">
          <img src={cardImg} className="w-full object-cover" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Forest: Focus for Productivity</h2>

          <div className="card-actions justify-between">
            <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#00D390] ">
              <DownloadIcon></DownloadIcon> Fashion
            </div>
            <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#FF8811] ">
              <StarIcon></StarIcon>
              Products
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 border shadow-sm ">
        <figure className="h-48 overflow-hidden">
          <img src={cardImg} className="w-full object-cover" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Forest: Focus for Productivity</h2>

          <div className="card-actions justify-between">
            <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#00D390] ">
              <DownloadIcon></DownloadIcon> Fashion
            </div>
            <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#FF8811] ">
              <StarIcon></StarIcon>
              Products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
