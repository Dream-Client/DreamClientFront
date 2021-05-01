import React, { Component } from 'react';

import './Roadmap.css';

class Roadmap extends Component {
  render() {
    return (
      <div className="container tm-container-2">
        <div className="row">
          <div className="block-roadmap scroll-section" id="roadmap">
            <div className="block-center">
              <div className="section section-2017">
                <div className="center-block"></div>
                <div className="left-block">
                  <div className="subsection subsection-q3">
                    <div className="q-block">
                      <div className="wrapper">
                        <span>2019</span>
                        <div className="circle"></div>
                      </div>
                    </div>
                    <div className="project">
                      <div className="title">project</div>
                      <ul>
                        <li className="done">
                          <span>Get frustrated by crashing community</span>
                        </li>
                        <li className="done">
                          <span>Realize that VRChat staff ignores canny</span>
                        </li>
                        <li className="done">
                          <span>Learn C# modding</span>
                        </li>
                      </ul>
                    </div>
                    <div className="product">
                      <div className="title">product</div>
                      <ul>
                        <li className="done">
                          <span>Create Dream client</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="right-block">
                  <div className="subsection subsection-q4">
                    <div className="q-block">
                      <div className="wrapper">
                        <span>2020</span>
                        <div className="circle"></div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="title">product</div>
                      <ul>
                        <li className="done">
                          <span>Create Dream client licensing system</span>
                        </li>
                        <li className="done">
                          <span>Create tools for il2cpp c++ modding</span>
                        </li>
                      </ul>
                    </div>
                    <div className="project">
                      <div className="title">project</div>
                      <ul>
                        <li className="done">
                          <span>Move Dream to il2cpp &amp; C++</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section section-2018">
                <div className="center-block"></div>
                <div className="left-block">
                  <div className="subsection subsection-q1">
                    <div className="q-block">
                      <div className="wrapper">
                        <span>H1'21</span>
                        <div className="circle"></div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="title">product</div>
                      <ul>
                        <li className="done">
                          <span>Finally launch website</span>
                        </li>
                      </ul>
                    </div>
                    <div className="project">
                      <div className="title">project</div>
                      <ul>
                        <li className="done">
                          <span>Lose 3 year discord account</span>
                        </li>
                        <li>
                          <span>Rewrite Dream client api</span>
                        </li>

                        <li>
                          <span>Create detailed website</span>
                        </li>
                        <li>
                          <span>Improve il2cpp tools</span>
                        </li>
                        <li>
                          <span>Asses features state</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="right-block">
                  <div className="subsection subsection-q2">
                    <div className="q-block">
                      <div className="wrapper">
                        <span>H2'21</span>
                        <div className="circle"></div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="title">product</div>
                      <ul>
                        <li>
                          <span>Move website &amp; api over to SSL</span>
                        </li>
                      </ul>
                    </div>
                    <div className="project">
                      <div className="title">project</div>
                      <ul>
                        <li>
                          <span>Create management panel</span>
                        </li>
                        <li>
                          <span>Automate Patreon support</span>
                        </li>
                        <li>
                          <span>Automate Paypal support?</span>
                        </li>
                        <li>
                          <span>Prepare for Unity 2019 update</span>
                        </li>
                        <li>
                          <span>Improve il2cpp tools</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Roadmap };
