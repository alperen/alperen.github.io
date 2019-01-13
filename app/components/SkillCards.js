import React from 'react';
import posed from 'react-pose';

import analytics from '../analytics';

const colors = [
  {color: '#F7231A', name: 'Beginner'},
  {color: '#FAA219', name: 'Medium'},
  {color: '#4BCF9B', name: 'Enough'},
];

export default class SkillCards extends React.Component {
  constructor () {
    super ();
    this.filterBySkillLevel = this.filterBySkillLevel.bind (this);
    this.filterBySkillLevelRemove = this.filterBySkillLevelRemove.bind (this);
  }

  filterBySkillLevel (id) {
    document.querySelectorAll (`.c-skill-single:not(.L-${id})`).forEach (e => {
      e.classList.add ('opacitied');
    });

    analytics.event ({
      category: 'SKILLS',
      action: 'SKILLS_FILTERED',
      label: id,
    });
  }

  filterBySkillLevelRemove (id) {
    document.querySelectorAll (`.c-skill-single:not(.L-${id})`).forEach (e => {
      e.classList.remove ('opacitied');
    });
  }

  render () {
    return (
      <div className="c-skill-levels opacity-on-drag">
        {colors.map (({color, name}, ii) => {
          return (
            <div
              key={ii}
              className="label"
              id={name}
              onMouseOver={() => {
                this.filterBySkillLevel (name);
              }}
              onMouseLeave={() => {
                this.filterBySkillLevelRemove (name);
              }}
            >
              <span>
                {' '}
                <span className="level-box" style={{backgroundColor: color}} />
                {' '}
                <span className="s pl-2">{name}</span>
                {' '}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
