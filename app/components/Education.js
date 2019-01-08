import React from 'react';

const list = [
    {title:'İTO Vakfı Süleyman Taştekin Techincal High School',content:'Between 2012 and 2016. Web Design and Programming Department'},
    {title:'Samsung Akademi İzmir', content:'I graduated as firstly. On depertmant of Computer'},
    {title:'Mugla Sitki Kocman Universitesi', content:'I\'ve joined 2017 September to university. Now i\'m studying second grade IT Engineering at Technology Depertmant'}
];

export default class Education extends React.Component {
  render () {
    return (
      <div>
        {list.slice(0).reverse().map(({title,content}) => {
            return <details key={Math.random()}>
            <summary>{title}</summary>
            <p className="text-black-50 text-small">{content}</p>
          </details>
        })}
      </div>
    );
  }
}
