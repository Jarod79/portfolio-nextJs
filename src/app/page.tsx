import Image from "next/image";
import LogoHome from "@/img/EA.png";

export default function Home() {
  return (
    <div className="home">
      <Image src={LogoHome} alt="home" />
    </div>
  );
}
