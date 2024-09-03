import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

function ContactItem({ title, link, type, index }) {
  return (
    <a
      href={link}
      className='text-stone-500 hover:text-black hover:dark:text-stone-200 mx-auto w-full'
      key={index}
    >
      <div className='flex w-11/12 border-stone-500 hover:border-black dark:border-stone-500 hover:dark:border-stone-200 border text-center items-center mx-auto h-8'>
        <span className='flex items-center mx-auto'>
          <span className='px-1 py-1 mr-1'>
            {type === "github" ? (
              <FaGithub />
            ) : type === "email" ? (
              <HiOutlineMail />
            ) : (
              <FaLinkedin />
            )}
          </span>{" "}
          <p className='mx-auto'>{title}</p>
        </span>
      </div>
    </a>
  );
}

export default ContactItem;
