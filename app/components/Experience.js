import React from "react";

import {experienceHistory} from "../constants/experienceConstants";

function Experience() {
  return (
    <div className="row">
      {experienceHistory.map(({ title, url, description }, ii) => {
        return (
          <div key={ii} className="col col-12">
            <p>
              <i className="fas fa-caret-right"></i>

              <span> {title} </span>·

              <a href={url} className="text-small" target="_blank">
                {url}
              </a>
            </p>

            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
