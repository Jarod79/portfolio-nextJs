'use client'
import { useState } from "react";
import Menu from "@/components/Menu";
import git from "@/img/git.png";
import linkedin from "@/img/Linkedin.png";
import Logo from "@/img/LogoEA.png";
import Image from "next/image";

const MenuBar = () => {
  const [menuShow, setMenuShow] = useState<boolean>(false);
  const socialNetwork = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/eric-arrijuria-a64990/",
      image: linkedin
    },
    {
      name: "GitHub",
      link: "https://github.com/Jarod79",
      image: git
    }
  ];
  return (
    <div className="menuLeft">
      <div className="menuLeft__logo">
        <Image height={50} width={50} src={Logo} alt="logo" />
      </div>
      <div className="menuLeft__burger">
        <div className="wrapper" onClick={() => setMenuShow(!menuShow)}>
          <div className="bun">
            <div className="bigmac">
              <span className="meat">{menuShow ? "CLOSE" : "MENU"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="menuLeft__social">
        {socialNetwork.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="blank"
            className="menu_link_social"
          >
            <Image height={25} width={25} src={social.image} alt={social.name} className="linkedin" />
          </a>
        ))}
      </div>

      <Menu show={menuShow} setMenuShow={setMenuShow} />
    </div>
  );
};

export default MenuBar;
