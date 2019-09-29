import React from 'react';

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="d-flex align-items-end" style={{ height: 100 }}>
        <div className="d-flex align-items-center">
          <div className="pl-2">
            <span> Thank you for your interest. </span> <br />
            <span className="text-muted text-small">
              {' '}Last Update on Content: 04.01.2019
            </span>
          </div>
        </div>
      </div>
    );
  }
}
