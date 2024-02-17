import LogoHome from "../img/EA.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className="home">
      <Image style={{objectFit: "contain"}} src={LogoHome} alt="home"  />
    </div>
  );
};
export default Home;
