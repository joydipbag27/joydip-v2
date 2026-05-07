import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div className="flex items-center gap-4 sm:gap-10">
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


    </nav>
  );
};

export default Navbar;
