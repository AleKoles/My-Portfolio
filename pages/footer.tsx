import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto px-4 max-w-7xl mt-20 pb-8 flex flex-col justify-center items-center gap-6">

      {/* Open to work pill 
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-sm text-emerald-700 dark:text-emerald-400 font-medium">
          Open to remote Design Engineer roles
        </span>
      </div>*/}

      {/* Social icons */}
      <div className="text-4xl text-gray-600 dark:text-gray-200 flex justify-center gap-16 py-3">
        <a href="https://www.linkedin.com/in/oleksandra-kolesnikova/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
          <AiFillLinkedin className="hover:scale-110 hover:text-black dark:hover:text-white transition-transform" />
        </a>
        <a href="https://github.com/AleKoles" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
          <AiFillGithub className="hover:scale-110 hover:text-black dark:hover:text-white transition-transform" />
        </a>
        <a href="mailto:kolesnikova.alexandra@gmail.com" target="_blank" rel="noreferrer noopener" aria-label="Email">
          <AiOutlineMail className="hover:scale-110 hover:text-black dark:hover:text-white transition-transform" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} Oleksandra Kolesnikova
      </p>

    </footer>
  );
};

export default Footer;