import { useEffect, useState } from "react";
import API from "../services/api";
import "./footer.css";

// icons
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {

    const [footer, setFooter] = useState(null);

    useEffect(() => {
        API.get("footer/")
            .then((res) => setFooter(res.data[0]))
            .catch((err) => console.log(err));
    }, []);

    if (!footer) return null;

    return (
        <footer className="footer" id = "contact">

            <div className="footer-container">

                {/* CONTACT */}
                <div className="footer-left">

                    <h3>Contact Me</h3>

                    <a href={`mailto:${footer.email}`} className="footer-link">
                        <FaEnvelope /> {footer.email}
                    </a>

                    <a href={`tel:${footer.phone}`} className="footer-link">
                        <FaPhone /> {footer.phone}
                    </a>

                </div>

                {/* SOCIAL */}
                <div className="footer-center">

                    <h3>Follow Me</h3>

                    <a href={footer.github} target="_blank" rel="noreferrer" className="footer-link">
                        <FaGithub /> GitHub
                    </a>

                    <a href={footer.linkedin} target="_blank" rel="noreferrer" className="footer-link">
                        <FaLinkedin /> LinkedIn
                    </a>

                    <a href={footer.instagram} target="_blank" rel="noreferrer" className="footer-link">
                        <FaInstagram /> Instagram
                    </a>

                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} {footer.copyright_text}
                </p>

            </div>

        </footer>
    );
}

export default Footer;