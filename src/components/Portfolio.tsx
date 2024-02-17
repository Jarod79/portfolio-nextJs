import Shoe from "@/img/Shoe.png";
import Wild from "@/img/Wild.png";
import Olentzero from "@/img/Olentzero.png";
import Portfoliov1 from "@/img/portfolio.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import '@mantine/carousel/styles.css';
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Image from "next/image";

const Portfolio = () => {
  // Array from display infos in carousel
  const carouselInfos = [
    {
      link: "https://jarod79.github.io/Shoe-Shepherd-Site/",
      name: "Shoe Shepherd",
      image: Shoe,
      text: `Premier projet de la formation, un site pour la sauvegarde des
            chaussures abandonnées. Javascript, HTML, CSS, Github.`
    },
    {
      link: "https://jarod79.github.io/wild-heroes/#/",
      name: "Wild Heroes",
      image: Wild,
      text: `Deuxième projet de la formation, basé sur une API de super-héros.
            Javascript, React, CSS, Api rest, Github.`
    },
    {
      link: "https://jarod79.github.io/olentzero-music/",
      name: "Olentzero",
      image: Olentzero,
      text: `Projet de calendrier de l'avent, lors d'un hackaton de 30 heures.
            Javascript, React, CSS, Github.`
    },
    {
      link: "https://jarod79.github.io/portfolio/",
      name: "Portfolio",
      image: Portfoliov1,
      text: `Mon premier portfolio créé sous react avec un back pour les envois
            d'émail.`
    }
  ];
  const slides = carouselInfos.map((carousel, index) => (
    <CarouselSlide w={100}  key={index}><a  href={carousel.link} target="blank">
      <p className="portfolio__link">{carousel.text}</p>
      <Image  src={carousel.image} alt={carousel.name} />
      <p className="legend" style={{ fontSize: "2vw" }}>
        {carousel.text}
      </p>
    </a>
    </CarouselSlide>
  ))
  return (
    <div className="portfolio">
      <Carousel  withIndicators height={200}  slideGap="md" align="start" className="portfolio__carousel">
        {slides}
        </Carousel>
    </div>
  );
};
export default Portfolio;
