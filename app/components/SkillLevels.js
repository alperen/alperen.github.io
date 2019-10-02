import React from "react";

import { SKILL_EXPERIENCE_LEVELS } from "../constants/skillContants";

import "../scss/components/_skill-levels.scss";

function SkillLevels() {
  return (
    <div className="c-skill-levels d-none d-md-block">
      {Object.values(SKILL_EXPERIENCE_LEVELS).map(({ color, label }, ii) => {
        return (
          <div
            key={ii}
            className="label"
            id={label}
          >
            <span>
              <span className="level-box" style={{ backgroundColor: color }} />

              <span className="s pl-2">{label}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default SkillLevels;
