import React from 'react';

import posed from 'react-pose';
import {observer, inject} from 'mobx-react';

import analytics from '../analytics';

const Photo = posed.img ({
  draggable: 'y',
  dragBounds: { top:-100, bottom:500 },
  init: {opacity: 1, zIndex: 99},
  drag: {opacity: 0.5, scale: 0.8, zIndex: 150},
  dragEnd: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {type: 'spring'},
  }
});

@inject('store')
@observer
export default class ProfilePhoto extends React.Component {

  constructor(props){
    super(props);

    this.dragging = this.dragging.bind(this);
  }

  dragging(){
    let {store} = this.props.store;
    let {profilePhotoDragged} = store;
    store.profilePhotoDragged = !profilePhotoDragged;

    analytics.event ({
      category: 'PROFILE_PHOTO',
      action: 'PROFILE_PHOTO_DRAGGED'
    });
  }

  render () {
    return (
      <div>
        <div onMouseDown={this.dragging} onMouseUp={this.dragging}>
          <Photo
            src="./img/me.jpg"
            alt="Alperen Turkoz"
            className="img-fluid profile-photo" 
          />
        </div>
        <div className="gulucuk">
          <img src="./img/gulucuk.png" className="img-fluid" />
        </div>
      </div>
    );
  }
}
