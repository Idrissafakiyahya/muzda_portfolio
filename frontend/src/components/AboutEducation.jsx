import { useEffect, useState } from "react";
import API from "../services/api";
import "./about.css";

function AboutEducation() {

    const [about, setAbout] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {

        API.get("about/")
            .then(res => setAbout(res.data))
            .catch(err => console.log(err));

        API.get("education/")
            .then(res => setEducation(res.data))
            .catch(err => console.log(err));

    }, []);

    return (

        <section className="about-section" id="about">

            <div className="about-container">

                {/* TITLE */}
                <div className="section-title">
                    About Me & Education
                </div>

                {/* GRID */}
                <div className="about-grid">

                    {/* ABOUT */}
                    <div className="about-card">

                        <h2 className="about-title">About Me</h2>

                        {about.map((item) => (

                            <div key={item.id} className="about-content">

                                {/* PROFILE IMAGE */}
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt="profile"
                                        className="about-profile-img"
                                    />
                                )}

                                {/* TEXT */}
                                <p className="about-text">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                    {/* EDUCATION */}
                    <div className="education-card">

                        <h2 className="education-title">Education</h2>

                        <div className="timeline">

                            {education.map((item) => (

                                <div key={item.id} className="timeline-item">

                                    <div className="dot"></div>

                                    <div className="timeline-content">

                                        <h3>{item.school_name}</h3>
                                        <p>{item.course}</p>
                                        <span>{item.start_year} - {item.end_year}</span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* BOTTOM INFO */}
                <div className="bottom-info">

                    <div className="info-card">
                        <h4>Languages</h4>
                        <p>Swahili & English</p>
                     
                    </div>

                    <div className="info-card">
                        <h4>Location</h4>
                        <p>Zanzibar</p>
                    </div>

                </div>

            </div>

        </section>

    )
}

export default AboutEducation;