import React from 'react';
import Transliteration from './Transliteration'

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Hanacaraka</h1>
      <p>Transliterate between latin and javanese</p>
      <Transliteration />
    </div>
  </section>
);

export default Introduction;
