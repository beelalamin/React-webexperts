import React from 'react';
import { Switch, Route } from "react-router-dom";
import Portfolios from './Pages/Portfoliospage';
import Home from './Pages/Home'
import About from './Pages/Aboutpage'
 import Blogs from './Pages/Blogspage'
import Error from './Pages/Error'
import Nav from './Components/Nav';
import Services from './Pages/Servicespage';

function App() {
  return (
    <>
    <Nav />
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact  path="/about/" component={About} />
        <Route  exact path="/portfolios/" component={Portfolios} />
        <Route  exact path="/Blogs" component={Blogs} />
        <Route component={Error} />
      </Switch>
    </>
   )
}

export default App;
