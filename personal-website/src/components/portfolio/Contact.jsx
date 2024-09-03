import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Title from "./Title";
import contact from "../../data/contact";
import ContactItem from "./ContactItem";

function Contact() {
  return (
    <div>
      <div className='container flex flex-wrap items-center justify-center mx-auto my-16 relative'>
        <div className='py-1 absolute top-0 w-full'>
          <Title id='contact'>Contact</Title>
        </div>
        <div className='inline-grid grid-cols-3 w-9/12 items-center justify-between my-24'>
          {contact.map((item, index) => (
            <ContactItem
              title={item.title}
              link={item.link}
              type={item.type}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
