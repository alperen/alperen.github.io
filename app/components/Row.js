import React from 'react';

export default class Row extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    const {title = '', children} = this.props;
    return (
      <section className="row mt-3" id={title}>
        <div className="col-4 opacity-on-drag text-right">
          <span>
            <b>{title && `${title}:`}</b>
            </span>
        </div>
        <div className="col-8 pl-0 text-justify">
          {children}
        </div>
      </section>
    );
  }
}
