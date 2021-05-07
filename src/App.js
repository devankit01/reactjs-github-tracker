import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Github  from "./components/Github";
import Error  from "./components/Error";


function App() {
  return (
    <div className="App">
      <nav>
        <p>ReactJS Social Media Tracker</p>
      </nav>

      <BrowserRouter>

      <Switch>
        <Route exact path="/">
    
      <div className="social__container">
        <a href="/github">
          <div className="social__card">
           <div className="social__icon">  <i class="fa fa-github"></i></div><p>Github</p>
          </div>
        </a>

        <a href="/linkdein">
          <div className="social__card">
          <div className="social__icon">  <i class="fa fa-linkedin"></i></div><p>LinkedIn</p>
          </div>
     
        </a>

        <a href="/instagram">
          <div className="social__card">
          <div className="social__icon">  <i class="fa fa-instagram"></i></div><p>Instagram</p>
          </div>
        </a>

        <a href="/facebook">
          <div className="social__card">
          <div className="social__icon">  <i class="fa fa-facebook"></i></div><p>Facebook</p>
          </div>
        </a>
      </div>
        </Route>
      </Switch>
        <Switch>
          <Route path="/github" component={Github}>
            <Github />
          </Route>
        </Switch>

        {/* <Switch>
          <Route  component={Error}>
            <Error/>
          </Route>
        </Switch> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
