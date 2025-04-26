import React from "react";
import "./skills.css";

function SkillCard({ title, skills }) {
    return (
        <div className="skills__content">
            <h3 className="skills__title">{title}</h3>
            <div className="skills__box">
                {skills.map((group, groupIndex) => (
                    <div className="skills__group" key={groupIndex}>
                        {group.map((skill, skillIndex) => (
                            <div className="skills__data" key={skillIndex}>
                                <i className="uil uil-check-circle"></i>
                                <div>
                                    <h3 className="skills__name">{skill.name}</h3>
                                    <span className="skills__level">{skill.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillCard; 