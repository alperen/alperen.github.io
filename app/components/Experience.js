import React from "react";

import {experienceHistory} from "../constants/experienceConstants";

function Experience() {
  return (
    <div className="row">
      {experienceHistory.map(({ title, url, description, gains = []}, ii) => {
        console.log(gains);
        return (
          <div key={ii} className="col col-12">
            <p>
              <i className="fas fa-caret-right"></i>

              <span> {title} </span>·

              <a href={url} className="text-small" target="_blank">
                {url}
              </a>
            </p>

            <p dangerouslySetInnerHTML={{__html: description}} />

            {
              gains.length > 0 && [
                <p className="small text-bold"><b>What I've learned ?</b></p>,
                <ul>
                  {gains.map((gain, index) => <li key={index}><small>{gain}</small></li>)}
                </ul>
              ]
            }
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
