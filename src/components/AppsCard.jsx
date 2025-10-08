import { DownloadIcon, StarIcon } from "lucide-react";

import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { title, image, downloads, ratingAvg,id } = app;
  // console.log(title, image,downloads,ratingAvg);
  function formatDownloads(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }

    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  }
  return (
    <div className="">
      <Link to={`/app-details/${id}`}>
        <div className="card bg-base-100  shadow-md hover:border border-gray-400 hover:scale-105 transform ease-in-out p-4">
          <figure className="h-64 overflow-hidden">
            <img
              src={image}
              className="w-full object-cover rounded-xl"
              alt="Shoes"
            />
          </figure>
          <div className="">
            <h2 className="card-title my-4">{title}</h2>

            <div className="card-actions justify-between">
              <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#00D390] ">
                <DownloadIcon></DownloadIcon> {formatDownloads(downloads)}
              </div>
              <div className="flex gap-2 py-2 px-3 rounded-sm font-medium bg-[#F1F5E8] text-[#FF8811] ">
                <StarIcon></StarIcon>
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppsCard;
