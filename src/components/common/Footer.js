import React from 'react';

import '../../assets/sass/main.scss';

const Footer = () => (
  <footer id="footer" className="wrapper style1-alt">
    <div className="inner">
      <ul className="menu">
        <li>&copy; Copyright {new Date().getFullYear()} Izzur. All rights reserved.</li>
        <li>
          <a href="https://github.com/Izzur">Created by Izzur</a>
        </li>
        <li>
          Design by <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
