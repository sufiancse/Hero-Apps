import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src={heroImg} alt="" />
      </div>
      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"></div>
    </div>
  );
};

export default Hero;
