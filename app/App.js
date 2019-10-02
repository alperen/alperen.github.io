import React from "react";
import {
  Introduction,
  ProfilePhoto,
  Row,
  Education,
  Skills,
  SkillLevels,
  Experience,
  Languages,
  Footer,
  Studies
} from "./components";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./scss/main.scss";

function App() {
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col col-12 col-md-7">

          <div className="d-flex flex-row align-items-end">
            <div className="col col-4 d-none d-md-block">
              <ProfilePhoto />
            </div>

            <div className="col col-12 col-md-8 pl-0 pb-0">
              <Introduction />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-4">
              <div className="d-flex flex-md-row-reverse other-links opacity-on-drag">
                <a
                  href="https://github.com/alperen"
                  className="pr-2 pr-md-0"
                  target="_new"
                  data-balloon="Alperen  Turkoz's Github Account"
                  data-balloon-pos="down"
                  alt="Alperen  Turkoz's Github Account"
                >
                  <i className="fab fa-github-square fa-2x" />
                </a>

                <a
                  href="https://www.linkedin.com/in/alperenturkoz/"
                  target="_new"
                  data-balloon="Alperen  Turkoz's Linkedin Account"
                  data-balloon-pos="down"
                  alt="Alperen  Turkoz's Linkedin Account"
                  className="mr-2"
                >
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </div>
            </div>
          </div>

          <Row title="Summary">
            <p>
              Hi, it's Alperen. I am 21 years old. I was born at Izmir, Turkiye.
              I'm living between Mugla and Izmir. Also I'm studying third grade at Mugla
              Sitki Kocman University. I can write Javascript fluently. My hobbies are fitness, dining, listen to music and write anything that ordinary.
              <br />
              <b className="text-danger"><i>
                I'm looking for an internship opportunity next spring semester along in İzmir, Turkiye.
                <a href="#Studies"> Look over my studies.</a>
              </i></b>
            </p>
          </Row>

          <Row title="Education">
            <Education />
          </Row>

          <Row title="Skills">
            <SkillLevels />
            <Skills />
          </Row>

          <Row title="Experience">
            <Experience />
          </Row>

          <Row title="Studies">
            <Studies />
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

export default App;
