import React from 'react';

export default class ProfilePhoto extends React.Component {
  constructor (props) {
    super (props);

    this.dragging = this.dragging.bind (this);
  }

  dragging () {
    let {store} = this.props.store;
    let {profilePhotoDragged} = store;
    store.profilePhotoDragged = !profilePhotoDragged;
  }

  render () {
    return null;

    return (
      <div className="c-profile-photo">
        <div onMouseDown={this.dragging} onMouseUp={this.dragging}>
          <Photo
            src="./img/me.jpg"
            alt="Alperen Turkoz"
            className="img-fluid photo"
          />
        </div>
        <div className="gulucuk">
          <img src="./img/gulucuk.png" className="img-fluid" />
        </div>
      </div>
    );
  }
}
