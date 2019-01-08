import React from 'react';

const ExperienceList = [
  {title:'90Pixel', url:'http://www.90pixel.com',description:'I was a javascript developer intern for two months along. (June - July 2018)'},
  {title:'FOK', url:'https://www.fok.com.tr/',description:'I made a React Native Application. (June - September 2017)'},
  {title:'FOK', url:'https://www.fok.com.tr/',description:'PHP Developer intern (June - September 2016)'},
];

export default class Experience extends React.Component {
  render () {
    return (
      <div className='row'>
        {ExperienceList.map(({title,url,description},ii) => {
            return <div key={ii} className='col col-12'>
                <p><span><i className="fas fa-caret-right"></i></span> <span> {title} </span> · <a href={url} className="text-small" target="_blank">{url}</a></p>
                <p>{description}</p>
            </div>
        })}
      </div>
    );
  }
}
