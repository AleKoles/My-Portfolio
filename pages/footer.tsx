import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-20 flex flex-col justify-center items-center">
      <a
        href="https://github.com/AleKoles/My-Portfolio"
        target="_blank"
        className=" w-fit flex flex-col justify-center text-gray-600 hover:text-black dark:text-gray-200 dark:hover:text-white"
      >
        <FiGithub className="text-2xl mx-auto" />
        <p>Source Code</p>
      </a>
    </footer>
  );
};

export default Footer;
