import { DownloadIcon, StarIcon } from "lucide-react";
import { removeList } from "../storage/localStorage";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";

const InstallationCard = ({ installedApps, setInstalledList }) => {
  const { image, title, downloads, ratingAvg, size, id } = installedApps;
  function formatDownloads(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  }

  const handleUninstall = () => {
    removeList(id);
    setInstalledList((previousData) =>
      previousData.filter((app) => app.id !== id)
    );
    toast(`Uninstalled Apps: "${title}"`, {
      position: "top-center",
      type: "warning",
    });
  };
  //
  // flex justify-between items-center w-full md:justify-start md:gap-4
  return (
    <div className="bg-white p-5 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-center mb-5 gap-5">
      <div className="w-full md:w-auto flex justify-start  md:justify-center items-center  gap-4">
        <img src={image} alt={title} className="w-20 object-cover rounded-xl" />

        <div className="space-y-3">
          <h1 className="text-[#001931] font-medium text-lg">{title}</h1>
          <div className="flex gap-4">
            <div className="flex gap-1 text-[#00D390]">
              <DownloadIcon></DownloadIcon>{" "}
              <span> {formatDownloads(downloads)}</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-[#FF8811]">
              <FaStar></FaStar> <span> {ratingAvg}</span>
            </div>
            <div className="text-[#00D390]">
              <span>{size} MB</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleUninstall}
        className="bg-green-500 text-white font-semibold text-xl btn"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallationCard;
