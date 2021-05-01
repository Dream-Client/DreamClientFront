import React, { Component } from 'react';

import av from '../images/yamiAvatar.png';

class Message extends Component {
  render() {
    return (
      <div className=" tm-timeline-item">
        <div className="tm-timeline-item-inner">
          <img
            src={av}
            alt="Avatar"
            className="rounded-circle tm-img-timeline"
          />
          <div className="tm-timeline-connector"></div>
          <div className="tm-timeline-description-wrap">
            <div className="tm-bg-dark tm-timeline-description">
              <h3 className="tm-text-green tm-font-400">Recent events</h3>
              <p>
                As you may have noticed, Dream discord no longer exists.
                Unfortunately VRChat decided to report the server alongside
                other mods they found on github. I strongly believe that all
                bans were automatic with reason: "spreading cheats/hacks".
                Nobody contacted me beforehand or afterwards.
              </p>
              <h3 className="tm-text-green tm-font-400">What's next</h3>
              <p>
                To prevent such situation from happening again vast majority of
                what was on Dream discord/github will be moved to external
                places like this website and/or telegram. This may take a while
                but Dream will not stop services in the mean time, it's just
                gonna work a little different. Stay tuned.
              </p>
              <p>
                PS: If you wanna support my overall content creation, feel free
                to join my{' '}
                <a
                  target="_blank"
                  href="https://discord.gg/gzqRJQKNSP"
                  className="tm-text-green"
                >
                  Comfy Cave
                </a>
              </p>
              <p>
                You can also subscribe to Dream Update Telegram channel{' '}
                <a
                  target="_blank"
                  href="https://t.me/DreamClientUpdates"
                  className="tm-text-green"
                >
                  here!
                </a>
              </p>
              <p className="tm-text-green float-right mb-0">
                yamiM0NSTER ~ 2021 April 13th
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Message };
