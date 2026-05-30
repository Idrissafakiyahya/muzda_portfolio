import { useEffect, useState } from "react";
import API from "../services/api";
import "./projects.css";

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.get("projects/")
            .then((res) => setProjects(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="projects-section" id="projects">

            <div className="projects-container">

                <h2 className="projects-title">
                    My Projects
                </h2>

                {/* EMPTY STATE */}
                {projects.length === 0 ? (

                    <div className="projects-empty">
                        <h3>🚀 Projects Coming Soon</h3>
                        <p>
                            I am currently working on amazing projects.
                            They will be uploaded soon.
                        </p>
                    </div>

                ) : (

                    <div className="projects-grid">

                        {projects.map((project) => (

                            <div
                                key={project.id}
                                className="project-card"
                            >

                                {/* NO IMAGE SECTION */}

                                <div className="project-content">

                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>

                                    <p className="project-desc">
                                        {project.description}
                                    </p>

                                    <div className="project-buttons">

                                        <a
                                            href={project.github_link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="github-btn"
                                        >
                                            Code
                                        </a>

                                        <a
                                            href={project.live_link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="live-btn"
                                        >
                                            Live Demo
                                        </a>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </section>
    );
}

export default Projects;