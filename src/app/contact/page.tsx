import Contact from "@/components/Contact"

const ContactPage = () => {
  const url = process.env.REACT_APP_URL;
  
  return(<Contact url={url}/>)
}

export default ContactPage;