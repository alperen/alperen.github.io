import React from 'react';

import {educationHistory} from '../constants/educationConstants';

function Education() {
  return (
    <div>
      {educationHistory.reverse().map(({title,content = null}) => {
          return (
            <details key={Math.random()}>
              <summary>{title}</summary>

              <p className="text-black-50 text-small">{content}</p>
            </details>
          );
      })}
    </div>
  )
}

export default Education;
