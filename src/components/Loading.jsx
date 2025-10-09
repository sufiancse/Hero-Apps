import { ClockLoader } from "react-spinners";

const Loading = () => (
  <div className="flex flex-row justify-center items-center h-[30vh]  text-5xl text-center text-gray-400">
    <span className="flex justify-center items-center">
      L <ClockLoader color="gray"></ClockLoader> ADING
    </span>
  </div>
);

export default Loading;
