import React from "react";
import Logo from "@/img/LogoJs.png";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      text: "JAVASCRIPT"
    },
    {
      text: "HTML5"
    },
    {
      text: "CSS3"
    },
    {
      text: "SQL"
    },
    {
      text: "REACT"
    },
    {
      text: "NODE JS"
    },
    {
      text: "EXPRESS"
    },
    {
      text: "GITHUB"
    },
    {
      text: "TYPESCRIPT"
    },
    {
      text: "METHODE AGILE"
    }
  ];
  return (
    <div className="skills">
      <div className="skills__left">
        <Image style={{objectFit: "contain"}} src={Logo} alt="CODE" />
        <h3>
          <a href={'/cv/cv.pdf'} download="Eric-Arrijuria:CV.pdf">
            Télécharger mon C.V
          </a>
        </h3>
      </div>

      <div className="skills__language">
        {skills.map((skill, index) => (
          <p key={index}>{skill.text}</p>
        ))}
      </div>
    </div>
  );
};
export default Skills;
