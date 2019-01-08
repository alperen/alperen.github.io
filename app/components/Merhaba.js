import React from 'react';

import posed from 'react-pose';

const Container = posed.div({
    show:{
        scale:.9,
        opacity:.5,
        marginBottom:30,
        delay:3000,
    },
    heightAnimation:{
        height:100,
        scale:.8,
        opacity:0,
    }
});

const possibilities = [
    "Merhaba.",
    /*"Selam.",
    "Hoşgeldiniz.",
    "Welcome.",
    "Hello.",
    "Hi"*/
];

const getRandomItem = () => {
    return possibilities[Math.floor(Math.random()*possibilities.length)];
}

export default class Merhaba extends React.Component {

  constructor(){
      super();
      this.state = {
          animationState: null,
      }
  }

  componentDidMount(){
    setTimeout(() => {
        this.setState({animationState: 'show'});
        console.log('show');
    },400);
    setTimeout(() => {
        this.setState({animationState: 'heightAnimation'});
        console.log('heightAnimation');
    },1200);
  }  

  render () {
    
    const {animationState} = this.state;

    return (
      <div className="container-fluid p-5">
        <div className="col col-8">
          <div className="col offset-4">
            <Container pose={animationState} className="c-merhaba">
              <div className="merhaba-text"> {getRandomItem()} </div>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
