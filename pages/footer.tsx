import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiNotion } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="mx-auto px-4 max-w-7xl mt-32 pb-12 flex flex-col justify-center items-center gap-8 border-t border-slate-200 dark:border-slate-800 pt-12">

      {/* Status Pill - Shows you're active but high-level */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 dark:bg-amber-900/10 border border-sky-100 dark:border-amber-900/30">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 dark:bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500 dark:bg-amber-500"></span>
        </span>
        <span className="text-xs md:text-sm text-sky-800 dark:text-amber-200 font-semibold tracking-wide">
        Open to UX Engineer, Design Systems, and UI Architecture roles
        </span>
      </div>

      {/* Social icons - Updated with your brand colors */}
      <div className="rounded-full text-3xl text-slate-500 dark:text-slate-300 flex justify-center gap-12">
        <a 
          href="https://www.linkedin.com/in/oleksandra-kolesnikova/" 
          target="_blank" 
          rel="noreferrer noopener" 
          aria-label="LinkedIn"
          className="hover:text-sky-700 dark:hover:text-amber-400 transition-colors duration-300"
        >
          <AiFillLinkedin />
        </a>
         <a href="https://designengineer.notion.site/Portfolio-Oleksandra-Kolesnikova-UX-Engineer-Design-Systems-31065fba42288006af6fe357f8f6423c?pvs=143" target="_blank" rel="noreferrer noopener" aria-label="Notion Case Study" className="hover:text-sky-700 dark:hover:text-amber-400 transition-colors duration-300">
            <SiNotion /> 
        </a>
        <a 
          href="https://github.com/AleKoles" 
          target="_blank" 
          rel="noreferrer noopener" 
          aria-label="GitHub"
          className="hover:text-sky-700 dark:hover:text-amber-400 transition-colors duration-300"
        >
          <AiFillGithub />
        </a>
        <a 
          href="mailto:kolesnikova.alexandra@gmail.com" 
          target="_blank" 
          rel="noreferrer noopener" 
          aria-label="Email"
          className="hover:text-sky-700 dark:hover:text-amber-400 transition-colors duration-300"
        >
          <AiOutlineMail />
        </a>
      </div>

      {/* Copyright & Title Alignment */}
      <div className="text-center space-y-1">
        <p className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-widest">
          Oleksandra Kolesnikova
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
         UX Engineer | Product Designer | Systems Architect
        </p>
        <p className="text-[10px] text-slate-400 dark:text-slate-600 pt-4 uppercase tracking-tighter">
          © {new Date().getFullYear()} — Built with React & Type-Safe Intent
        </p>
      </div>

    </footer>
  );
};

export default Footer;