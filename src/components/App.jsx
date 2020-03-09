import React from 'react';
import '../styles/components/App.styl';

const cat =
  'https://firebasestorage.googleapis.com/v0/b/platzi-master-d7573.appspot.com/o/gato.gif?alt=media&token=d79bd5e0-4235-4b62-91ea-acf1cf0be1f7';
const App = () => {
  return (
    <div className="app">
      <img className="cat" src={cat} alt="cat" />
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
