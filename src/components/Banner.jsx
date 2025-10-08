import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="text-center">
        <div className="text-6xl font-bold ">
          <h1>We Build</h1>
          <h1><span className="font-black">Productive</span> Apps</h1>
        </div>
        <p className="text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br></br> Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div>
            <Link className="btn btn-outline mr-4">Google Play</Link>
            <Link className="btn btn-outline">App Store</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
