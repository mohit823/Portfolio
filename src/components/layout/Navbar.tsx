import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) setScrolled(true);
      else { setScrolled(false); setActive(""); }
      if (toggle) setToggle(false);
    };
    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;
        if (sectionTop < 0 && sectionTop + sectionHeight > 0) setActive(sectionId);
      });
    };
    window.addEventListener("scroll", navbarHighlighter);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, [toggle]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setToggle(false);
    };
    if (toggle) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle]);

  const menuVariants = {
    hidden: { opacity: 0, y: -16, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: "easeOut" } },
    exit: { opacity: 0, y: -12, scale: 0.96, transition: { duration: 0.18 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: (i: number) => ({
      opacity: 1, x: 0,
      transition: { delay: 0.04 + i * 0.07, duration: 0.25, ease: "easeOut" },
    }),
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-4 transition-all duration-500 ${
        scrolled ? "navbar-glass-dark py-3" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={logo}
            alt="logo"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />
          <p className="text-[17px] font-bold text-white transition-colors duration-300 group-hover:text-[#00f0ff]">
            {config.html.title}
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden list-none flex-row gap-8 sm:flex">
          {navLinks.map((nav) => (
            <li key={nav.id} className="nav-link-wrapper relative">
              <a
                href={`#${nav.id}`}
                className={`cursor-pointer text-[15px] font-semibold transition-all duration-300 ${
                  active === nav.id ? "text-[#00f0ff]" : "text-white/70 hover:text-white"
                }`}
              >
                {nav.title}
              </a>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#00f0ff] to-[#bf61ff]"
                initial={false}
                animate={{ width: active === nav.id ? "100%" : "0%", opacity: active === nav.id ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <div className="flex items-center sm:hidden" ref={menuRef}>
          <button
            onClick={() => setToggle(!toggle)}
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/10"
          >
            <motion.img
              src={toggle ? close : menu}
              alt="menu"
              className="h-6 w-6 object-contain"
              key={toggle ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mobile-menu-glass-dark absolute right-4 top-[68px] z-20 min-w-[200px] rounded-2xl p-5"
              >
                <ul className="flex flex-col gap-4">
                  {navLinks.map((nav, i) => (
                    <motion.li
                      key={nav.id}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      className={`cursor-pointer text-[15px] font-semibold transition-colors duration-300 ${
                        active === nav.id ? "text-[#00f0ff]" : "text-white/70 hover:text-white"
                      }`}
                      onClick={() => setToggle(false)}
                    >
                      <a href={`#${nav.id}`} className="flex items-center gap-2.5">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                        {nav.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
