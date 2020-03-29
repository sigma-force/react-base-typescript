import React from 'react';
import '../styles/components/App.styl';
import '../styles/fundations/typography.styl';
import cat from '../styles/components/gato.gif';

const App = () => {
  return (
    <div className="app">
      <img className="cat" src={cat} alt="cat" />
      <h1 className="h1">Hello React</h1>
    </div>
  );
};

export default App;
