import React from 'react';

export default class Introduction extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <div>
        <div>
          <h2>Alperen TÜRKÖZ</h2>
        </div>
        <div>
          <p className="mb-0">
            junior javascript developer · from Izmir, Turkiye
          </p>
          <p className="mb-0">
            <a
              href="mailto:alperentrkz@gmail.com"
              data-balloon="My personal e-mail address"
              data-balloon-pos="down"
            >
              alperentrkz@gmail.com
            </a>
          </p>
        </div>
      </div>
    );
  }
}
