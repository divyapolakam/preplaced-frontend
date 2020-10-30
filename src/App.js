import React from 'react';
import Mainpage from './Components/Mainpage';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import "./App.css";
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Router>
<Route path="/" exact component={Mainpage} />

</Router>

      </header>
    </div>
);

};
export default App;

