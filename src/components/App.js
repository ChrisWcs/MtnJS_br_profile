import React from 'react';
import Picture from './picture/Picture';
import Name from './name/Name';
import Bio from './bio/Bio';
import "./App.css";

const text = `Rocket is a member of the Guardians of the Galaxy. He and Groot are particularly close friends
              Sometimes he tries to play it off like he doesn't care but deep down he does. He loves to use
              guns and he is also very strong.`;

const App = () => (
  <div className="Column">
    <Picture />
    <Name name="Rocket"/>
    <Bio bio={text} />
  </div>
);

export default App;
