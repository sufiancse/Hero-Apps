import React from "react";
import { Link } from "react-router";
import googleImg from "../assets/googlePlay.png";
import appleImg from "../assets/appStore.png";

const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <div className="text-6xl font-bold mt-10 mb-6">
          <h1>We Build</h1>
          <h1>
            <span className="font-black bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps
          </h1>
        </div>
        <p className="text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br></br> Our goal is to turn
          your ideas into digital experiences that truly make an impact.
        </p>
        <div className="my-10">
          <a href="https://play.google.com/store/" target="_blank">
            <button className="btn border border-gray-300 mr-4 text-xl text-[#001931] font-semibold">
              <img
                src={googleImg}
                className="w-7 "
                alt=""
              />
              Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank">
            <button className="btn border border-gray-300 text-xl text-[#001931] font-semibold">
              <img
                src={appleImg}
                className="w-7"
                alt=""
              />
              App Store
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
