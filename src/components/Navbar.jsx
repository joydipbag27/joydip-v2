import { NavLink } from "react-router-dom";
import { UserRound } from "lucide-react";

const GitHubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.04A9.3 9.3 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.04 2.74-1.04.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M5.34 8.67H2.5V21h2.84V8.67ZM3.92 3C2.99 3 2.25 3.75 2.25 4.68c0 .9.72 1.65 1.63 1.65h.02c.95 0 1.68-.74 1.68-1.65C5.56 3.75 4.84 3 3.92 3ZM21.75 13.93c0-3.78-2.02-5.54-4.7-5.54-2.17 0-3.14 1.2-3.68 2.04V8.67h-2.84c.04 1.15 0 12.33 0 12.33h2.84v-6.89c0-.37.03-.74.14-1 .3-.74.98-1.5 2.12-1.5 1.5 0 2.1 1.14 2.1 2.82V21h2.84v-7.07h1.18Z" />
  </svg>
);

const XIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="M5 5l14 14" />
    <path d="M19 5L5 19" />
  </svg>
);

const Navbar = () => {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/joydipbag27",
      icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/joydipbag27/",
      icon: LinkedInIcon,
    },
    {
      label: "X",
      href: "https://x.com/JoydipBag12",
      icon: XIcon,
    },
  ];

  return (
    <nav
      className="w-full flex justify-between items-center py-5 px-4 md:px-10 border-b border-black/5 bg-white/80 backdrop-blur-xl sticky top-0 z-50"
      aria-label="Primary navigation"
    >
      {/* Brand/Logo */}
      <NavLink to="/" className="flex items-center gap-3 group" aria-label="Joydip Bag home">
        <div className="w-9 h-9 border-[2.5px] border-black rounded-full flex items-center justify-center bg-white overflow-hidden group-hover:border-[#D4FF00] transition-colors duration-300 shrink-0">
          <img
            src="/pf-profile.png"
            alt=""
            aria-hidden="true"
            width="512"
            height="512"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover rounded-full saturate-[1.05]"
          />
        </div>
        <span className="font-black text-lg tracking-tighter uppercase hidden sm:block">
          JOYDIP
        </span>
      </NavLink>

      {/* Navigation Links */}
      <div className="flex items-center gap-3 sm:gap-8">
        <div className="hidden sm:flex items-center gap-4 sm:gap-10">
          <NavLink
            to="/#work"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={() => `
              relative text-[13px] font-black uppercase tracking-widest transition-colors duration-300
              ${window.location.pathname === "/" ? "text-black" : "text-black/40 hover:text-black"}
            `}
          >
            {() => (
              <>
                Work
                {window.location.pathname === "/" && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4FF00] rounded-full border border-black/10" />
                )}
              </>
            )}
          </NavLink>
          <NavLink
            to="/lab"
            className={({ isActive }) => `
              relative text-[13px] font-black uppercase tracking-widest transition-colors duration-300
              ${isActive ? "text-black" : "text-black/40 hover:text-black"}
            `}
          >
            {({ isActive }) => (
              <>
                Lab
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4FF00] rounded-full border border-black/10" />
                )}
              </>
            )}
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `
              relative text-[13px] font-black uppercase tracking-widest transition-colors duration-300
              ${isActive ? "text-black" : "text-black/40 hover:text-black"}
            `}
          >
            {({ isActive }) => (
              <>
                About
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4FF00] rounded-full border border-black/10" />
                )}
              </>
            )}
          </NavLink>
        </div>

        <div
          className="flex items-center gap-1.5 sm:gap-2 sm:border-l sm:border-black/10 sm:pl-4"
          aria-label="Social links"
        >
          <NavLink
            to="/about"
            aria-label="Open About page"
            className={({ isActive }) =>
              `sm:hidden w-8 h-8 rounded-lg border flex items-center justify-center transition-all duration-300 active:translate-y-px ${
                isActive
                  ? "border-black bg-[#D4FF00] text-black"
                  : "border-black/10 bg-white text-black/70 hover:text-black hover:border-black hover:bg-[#D4FF00]"
              }`
            }
          >
            <UserRound size={15} strokeWidth={2.5} />
          </NavLink>
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`Open ${label} profile`}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-black/10 bg-white flex items-center justify-center text-black/70 hover:text-black hover:border-black hover:bg-[#D4FF00] transition-all duration-300 active:translate-y-px"
            >
              <Icon size={16} strokeWidth={2.4} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
