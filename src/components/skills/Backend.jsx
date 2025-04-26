import React from "react";
import SkillCard from "./SkillCard";
import { backendSkills } from "./skillsData";

function Backend() {
    return (
        <SkillCard 
            title="Backend Developer"
            skills={backendSkills}
        />
    );
}

export default Backend;