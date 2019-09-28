import React from 'react';


export default class LookingButton extends React.Component {
  constructor () {
    super ();
    this.state = {
      poseStatus: null,
      firstTextStatus: null,
      fullContentDisplay: 'none',
    };
    this.mouseEnter = this.mouseEnter.bind (this);
  }
  mouseEnter () {
    this.setState ({
      poseStatus: 'opened',
      firstTextStatus: 'passAway',
      fullContentDisplay: 'block',
    });
  }

  render () {

    return null;
    const {
      poseStatus,
      ulStatus,
      firstTextStatus,
      fullContentDisplay,
    } = this.state;
    return (
      <Button
        className="c-looking-btn"
        pose={poseStatus}
        onMouseEnter={this.mouseEnter}
      >
        <FirstText className="first-text text" pose={firstTextStatus}>
          <div>
            <span className="primary"> i'm looking for </span>
          </div>
          <div className="internship">
            <span className="primary">an internship</span>
          </div>
        </FirstText>
        <div style={{display: fullContentDisplay}} className="p-3">
          <div className="text">
            <span className="primary"> i'm looking for an internship </span>
          </div>
          <div className="mt-3">
            {interships.map (({title, content}, ii) => {
              return (
                <div key={ii} className="mb-2">
                  <span className="text-dark text-left text-uppercase">
                    {' '}<i className="fas fa-caret-right" /> {title}{' '}
                  </span>
                  <div>
                  <span className="internship-content">
                    {content}
                  </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Button>
    );
  }
}
