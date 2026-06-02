import { useEffect, useState } from "react";
import API from "../services/api";
import "./hero.css";

// 👉 STATIC IMAGE IMPORT
import profileImg from "../assets/profile.webp";

function Hero() {

    const [homeData, setHomeData] = useState([]);

    useEffect(() => {
        API.get("home/")
            .then(res => setHomeData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (

        <section className="hero-section" id="home">

            {homeData.map((item) => (

                <div key={item.id} className="hero-container">

                    {/* TOP */}
                    <div className="hero-top">

                        <h3 className="hero-small-text">
                            hi, i'm
                        </h3>

                        <h1 className="hero-name">
                            {item.title}
                        </h1>

                        <div className="hero-line"></div>

                    </div>

                    {/* MIDDLE */}
                    <div className="hero-middle">

                        {/* IMAGE LEFT (STATIC NOW) */}
                        <div className="hero-image-box">

                            <img
                                src={profileImg}
                                alt="profile"
                                className="hero-image"
                            />

                        </div>

                        {/* TEXT RIGHT CARD */}
                        <div className="hero-text-card">

                            <p className="hero-description">
                                {item.subtitle}
                            </p>

                            <div className="hero-extra">
                            </div>

                        </div>

                    </div>

                    {/* BUTTON */}
                    <div className="hero-bottom">

                        <button className="hero-button">
                            View Projects
                        </button>

                    </div>

                </div>

            ))}

        </section>

    );
}

export default Hero;