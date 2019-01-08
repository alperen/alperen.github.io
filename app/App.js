import React from 'react';
import {
  Introduction,
  ProfilePhoto,
  Row,
  LookingButton,
  Education,
  Skills,
  SkillCards,
  Experience,
  Languages,
  Footer,
} from './components';

import {inject, observer} from 'mobx-react';

@inject ('store')
@observer
export default class App extends React.Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <div className="container-fluid p-5">
        <LookingButton />
        <div className="row">
          <div className="col col-7">
            <div className="d-flex flex-row align-items-end">
              <div className="col col-4">
                <ProfilePhoto />
              </div>
              <div className="col col-8 pl-0 pb-0">
                <Introduction />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <div className="d-flex flex-row-reverse other-links opacity-on-drag">
                  <a
                    href="https://github.com/alperen"
                    target="_new"
                    data-balloon="Alperen  Turkoz's Github Account"
                    data-balloon-pos="down"
                    alt="Alperen  Turkoz's Github Account"
                  >
                    {' '}<i className="fab fa-github-square fa-2x" />{' '}
                  </a>
                  <a
                    href="https://github.com/alperen"
                    target="_new"
                    data-balloon="Alperen  Turkoz's Linkedin Account"
                    data-balloon-pos="down"
                    alt="Alperen  Turkoz's Linkedin Account"
                    className="mr-2"
                  >
                    {' '}<i className="fab fa-linkedin fa-2x" />{' '}
                  </a>
                </div>
              </div>
            </div>
            <Row title="Summary">
              <p>
                {' '}Hi, it's Alperen. I am 20 years old.
                I was born at Izmir, Turkiye. Usually I'm living here.
                Also I'm studying second grade at Mugla Sitki Kocman University.
                I am programming various things since i was 15 years old.
                I am able to use PHP, Javascript or little bit SCSS and Python. But Javascript is more effective.
                I am interesting to machine learning and computer science. I am studying on them.
              </p>
            </Row>
            <Row title="Education">
              <Education />
            </Row>
            <Row title="Skills">
              <SkillCards />
              <Skills />
            </Row>
            <Row title="Experience">
              <Experience />
            </Row>
            <Row title="Languages">
              <Languages />
            </Row>
            <footer>
              <Row>
                <Footer />
              </Row>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
