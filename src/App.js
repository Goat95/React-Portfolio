import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import SmoothScrollbar from './components/SmoothScrollbar';
import Home from './pages/Home';
import About from './pages/About';
import Animation from './pages/Animation';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App() {
  return (
    <>
      <SwitchTransition>
        <CSSTransition timeout={300} classNames="fade">
          <Router>
            <NavMenu />
            <SmoothScrollbar>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/animation">
                  <Animation />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
              <Footer />
            </SmoothScrollbar>
          </Router>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}