import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center px-5">
        <img src={heroImg} alt="" />
      </div>
      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-10 md:p-20">
        <h1 className="font-bold text-white text-4xl text-center">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center justify-center mt-10 ">
          <div className="text-center">
            <p className="text-gray-300">Total Downloads</p>
            <h1 className="font-extrabold text-6xl text-white my-2">29.6M</h1>
            <p className="text-gray-300">21% more than last month</p>
          </div>
          <div className="text-center">
            <p className="text-gray-300">Total Reviews</p>
            <h1 className="font-extrabold text-6xl text-white my-2">906K</h1>
            <p className="text-gray-300">46% more than last month</p>
          </div>
          <div className="text-center">
            <p className="text-gray-300">Active Apps</p>
            <h1 className="font-extrabold text-6xl text-white my-2">132+</h1>
            <p className="text-gray-300">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
