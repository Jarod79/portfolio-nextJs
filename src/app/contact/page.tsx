import Contact from "@/components/Contact"

const ContactPage = () => {
  const url = process.env.APP_URL_API;
  
  return(<Contact url={url}/>)
}

export default ContactPage;