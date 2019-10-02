import React from "react";

import {
  SKILL_LIST
} from "../constants/skillContants";

import "../scss/components/_skills.scss";

function Skills() {
  return (
    <div className="row">
      {SKILL_LIST.map(({text, level}, index) => {
        return (
          <div
            className="col col-6 mb-2 c-skill-single"
            key={index}
          >
            <span>
              <i className="fas fa-caret-right" />
              <span dangerouslySetInnerHTML={{__html: text}}/>
              <span className="level" style={{ backgroundColor: level.color }} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
