import React from 'react';

const colors = {
  red: '#F7231A',
  yellow: '#FAA219',
  green: '#4BCF9B',
  purple: '#523973',
};

const SkillsList = [
  { text: 'Javascript', color: colors.green },
  { text: 'React', color: colors.green },
  { text: 'React Native', color: colors.yellow },
  { text: 'Next.js', color: colors.red },
  { text: 'PHP', color: colors.green },
  { text: 'Laravel', color: colors.yellow },
  { text: 'MYSQL', color: colors.green },
  { text: 'Firebase', color: colors.yellow },
  { text: 'SCSS', color: colors.yellow },
  { text: 'webpack', color: colors.red },
  { text: 'Bootstrap', color: colors.green },
  { text: 'jest', color: colors.red },
  { text: 'Go', color: colors.purple },
  { text: 'Docker', color: colors.purple },
];

const getColorLabel = color => {
  return color == colors.red
    ? 'L-Beginner'
    : color == colors.green ? 'L-Enough' : color == colors.purple ? 'L-Interested-In' : 'L-Medium';
};

export default class Skills extends React.Component {
  render() {
    return (
      <div className="row">
        {SkillsList.map(({ text, color }, index) => {
          return (
            <div
              className={`col col-6 mb-2 c-skill-single ${getColorLabel(color) || ''}`}
              key={index}
            >
              <span>
                <i className="fas fa-caret-right" />
                {' '}
                {text}
                {' '}
                <span className="level" style={{ backgroundColor: color }} />
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
