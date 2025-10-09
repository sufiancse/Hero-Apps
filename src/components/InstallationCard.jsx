import { DownloadIcon, StarIcon } from "lucide-react";

const InstallationCard = ({ installedApps }) => {
  const { image, title, downloads, ratingAvg, size } = installedApps;
  function formatDownloads(num){
    if(num >= 1000000){
        return(num/1000000).toFixed(1).replace(/\.0$/,'') + "M"
    }
    if(num >= 1000){
        return(num/1000).toFixed(1).replace(/\.0$/,'') + "K"
    }
    return num
  }
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center mb-5">
      <div className="flex justify-center items-center gap-4">
        <img src={image} alt="" className="w-20 object-cover rounded-xl" />
        <div className="space-y-3">
          <h1 className="text-[#001931] font-medium text-lg">{title}</h1>
          <div className="flex gap-4">
            <div className="flex gap-1 text-[#00D390]">
              <DownloadIcon></DownloadIcon> <span> {formatDownloads(downloads)}</span>
            </div>
            <div className="flex gap-1 text-[#FF8811]">
              <StarIcon></StarIcon> <span> {ratingAvg}</span>
            </div>
            <div className="text-[#00D390]">
              <span>{size} MB</span>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-green-500 text-white font-semibold text-xl btn">
        Uninstall
      </button>
    </div>
  );
};

export default InstallationCard;
