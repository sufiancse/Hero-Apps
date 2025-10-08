import { Link } from "react-router";
import ErrorApp from "../assets/App-Error.png"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ErrorApps = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1 bg-gray-100 p-20 ">
        <div className="flex flex-col items-center justify-center">
          <img src={ErrorApp} className="max-w-[300px] mx-auto mb-6" alt="" />
          <div className="text-center">
            <h1 className="text-[#001941] text-5xl font-semibold">
              OPPS!! APP NOT FOUND
            </h1>
            <p className="text-[#627382] mt-3">
              The App you are requesting is not found on our system.  please try another apps
            </p>
          </div>
          <div>
            <Link to={"/"}>
              <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
                Go Back!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorApps;
