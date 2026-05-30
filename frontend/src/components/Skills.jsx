import { useEffect, useState } from "react";
import API from "../services/api";
import "./skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    API.get("skills/")
      .then((res) => {
        setSkills(res.data);
      })
      .catch((err) => {
        console.error("Error loading skills:", err);
      });
  }, []);

  const tools = [
    { name: "Python", icon: "🐍" },
    { name: "Excel", icon: "📊" },
    { name: "R", icon: "📈" },
    { name: "Stata", icon: "📉" },
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "🔢" },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <h2 className="skills-title">Skills & Tools</h2>

        {/* Skills */}
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="flip-card">
              <div className="flip-inner">

                <div className="flip-front">
                  <h3>{skill.name}</h3>
                </div>

                <div className="flip-back">
                  <h3>{skill.percentage}%</h3>
                  <p>Proficiency</p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="tools-section">
          <h3 className="section-subtitle">Tools I Use</h3>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-card">

                <div className="tool-icon">
                  {tool.icon}
                </div>

                <div className="tool-name">
                  {tool.name}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;