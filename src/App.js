import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Find from './components/Sections/Find';
import Sort from './components/Sections/Sort';
import Limit from './components/Sections/Limit';
import Reverse from './components/Sections/Reverse';
import Skip from './components/Sections/Skip';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/docs/find" component={Find} />
        <Route path="/docs/sort" component={Sort} />
        <Route path="/docs/limit" component={Limit} />
        <Route path="/docs/reverse" component={Reverse} />
        <Route path="/docs/skip" component={Skip} />
      </BrowserRouter>
    </div>
  )
}

export default App;
