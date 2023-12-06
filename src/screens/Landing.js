import MainImg from "../assets/UI Images/Celebrations(Bg) - hashtag.png";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  let navigate = useNavigate();
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Redirect");
    }, 1500);
  });

  myPromise.then(() => navigate("/register"));
  return (
    <section className="relative h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="leading-10">
        <img src={MainImg} alt={"main-img"} />
        <p className="text-white text-center">
          A Unique Birthday song for everyone!
        </p>
        <p className="text-white text-center">A Hindi Text, TODO Thing</p>
      </div>
    </section>
  );
};

export default Landing;
