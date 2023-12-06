import Brand from "../assets/UI Images/Cadbury Logo.png";
import MainLogo from "../assets/UI Images/2d logo.png";
import Hamburger from "../assets/UI Images/Hamburger.png";
const Navbar = () => {
  return (
    <nav className="bg-[#320071]">
      <div className="p-5">
        <div className="flex justify-between items-center ">
          <div className=" flex items-center">
            <img src={Brand} alt={"Brand-logo"} className="h-[40px]" />
            <img
              src={MainLogo}
              alt={"Brand-logo"}
              className="h-[110px] absolute left-[28vw]"
            />
          </div>
          <div>
            <img src={Hamburger} alt={"Hamburger"} className="w-[35px]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
