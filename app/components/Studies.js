import React from "React";
import { STUDIES } from "../constants/studyConstants";

function Studies() {
  return (
    <div>
      <ul>
        {STUDIES.map((study, ii) => (
          <li key={`study-${ii}`} className="pb-2">
            <div>
              {study.name} · <small><a href={study.url}>{study.url}</a></small>
            </div>
            <div>
              <small>
                {study.description}
              </small>
            </div>
            <div>
              <small><i>Application Stack:</i></small>
              <ul>
                {study.stack.map( (stackObject, stackIndex) => (
                  <li key={`stack--${stackIndex}`}>
                    <small>{stackObject}</small>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Studies;
