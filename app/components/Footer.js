import React from 'react';

export default class Footer extends React.Component {
  constructor () {
    super ();
    //this.darkSideOfTheMoon = this.darkSideOfTheMoon.bind(this);
  }

  render () {
    return (
      <div className="d-flex align-items-end" style={{height: 100}}>
        <div className="d-flex align-items-center">
          <div>
            <div className="dark-side-off-the-moon" />
          </div>
          <div className="pl-2">
            <span> Thank you for your interest. </span> <br />
            <span className="text-muted text-small">
              {' '}Last Update on Content: 04.01.2019
              <span
                data-balloon="This website is serving on Google Firebase"
                data-balloon-pos="down"
              >
                {' '}
                <img
                  src="./img/firebase.png"
                  alt="This website is serving on Google Firebase"
                />
                {' '}
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
