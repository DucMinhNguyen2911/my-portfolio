import React from "react";
import SkillCard from "./SkillCard";
import { toolSkills } from "./skillsData";

function Tool() {
    return (
        <SkillCard 
            title="Tools"
            skills={toolSkills}
        />
    );
}

export default Tool;