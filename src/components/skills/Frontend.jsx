import React from "react";
import SkillCard from "./SkillCard";
import { frontendSkills } from "./skillsData";

function Frontend() {
    return (
        <SkillCard 
            title="Frontend Developer"
            skills={frontendSkills}
        />
    );
}

export default Frontend;