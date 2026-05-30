import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");

   useEffect(() => {

    const sections = document.querySelectorAll("section, footer");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }

            });
        },
        {
            threshold: 0.3,
            rootMargin: "-100px 0px -40% 0px"
        }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();

}, []);

    const linkClass = (name) =>
        `block transition duration-300 ${
            active === name
                ? "text-purple-600 font-semibold"
                : "text-gray-700 hover:text-purple-600"
        }`;

    return (
        <nav className="relative w-full px-6 md:px-16 py-4 flex justify-between items-center sticky top-0 z-50">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-purple-50 to-pink-100 backdrop-blur-xl -z-10"></div>

            {/* LOGO */}
            <h1 className="text-3xl font-extrabold text-purple-600">
                Muzda
            </h1>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex gap-10 text-lg font-medium">
                <li><a href="#home" className={linkClass("home")}>Home</a></li>
                <li><a href="#about" className={linkClass("about")}>About</a></li>
                <li><a href="#skills" className={linkClass("skills")}>Skills</a></li>
                <li><a href="#projects" className={linkClass("projects")}>Projects</a></li>
                <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
            </ul>

            {/* HAMBURGER */}
            <div
                className="md:hidden text-3xl text-purple-600 cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                {open ? <FiX /> : <FiMenu />}
            </div>

            {/* DROPDOWN MENU */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-purple-100 flex flex-col px-6 py-4 gap-4 animate-fadeIn">

                    <a href="#home" onClick={() => setOpen(false)} className={linkClass("home")}>
                        Home
                    </a>

                    <a href="#about" onClick={() => setOpen(false)} className={linkClass("about")}>
                        About
                    </a>

                    <a href="#skills" onClick={() => setOpen(false)} className={linkClass("skills")}>
                        Skills
                    </a>

                    <a href="#projects" onClick={() => setOpen(false)} className={linkClass("projects")}>
                        Projects
                    </a>

                    <a href="#contact" onClick={() => setOpen(false)} className={linkClass("contact")}>
                        Contact
                    </a>

                </div>
            )}

        </nav>
    );
}

export default Navbar;