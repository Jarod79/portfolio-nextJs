'use client'
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  //Usestate pour récupérer les valeurs du formaulaire
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  //Usestate pour l'affichage des différentes erreurs
  const [empty, setEmpty] = useState("");
  const [confirmation, setConfirmation] = useState("");
  //Regex pour la validation de l'email
  const emailRegex = /\S+@\S+\.\S+/;
  const url = process.env.REACT_APP_URL;

  //Validation du formulaire et envois du mail
  const validate = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (
      message !== "" &&
      prenom !== "" &&
      nom !== "" &&
      emailRegex.test(mail)
    ) {
      axios
        .post(`${url}`, {
          prenom,
          nom,
          mail,
          message
        })
        .then(() => {
          setConfirmation("Votre message a bien été pris en compte, merci.");
          setEmpty("");
        })
        .catch((err) => console.error(err));
    } else if (!emailRegex.test(mail)) {
      setEmpty("Email invalide !");
      setConfirmation("");
    } else {
      setEmpty("Vous avez oublié de rentrer un champ.");
      setConfirmation("");
    }
  };

  return (
    <div className="contact">
      <div className="contact__content">
        <form className="contact__myForm" method="POST">
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="prenom"
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Votre prénom..."
            required
          />

          <label htmlFor="lastname">Nom de Famille</label>
          <input
            type="text"
            id="lastname"
            name="nom"
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom de famille..."
          />

          <label htmlFor="email">Adresse Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setMail(e.target.value)}
            placeholder="prénom.nom@gmail.com"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            typeof="text"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Écrivez votre message..."
          ></textarea>

          <button className="contact__submit" type="submit" onClick={validate}>
            Envoyer
          </button>
          {empty && <div className={"contact__alert"}>{empty}</div>}
          {confirmation && (
            <div className={"contact__confirmation"}>{confirmation}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
