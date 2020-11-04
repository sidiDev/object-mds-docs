import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  )
}

export default App;
