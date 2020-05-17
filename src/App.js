// npm run storybook
// https://upload.wikimedia.org/wikipedia/commons/5/51/Paw-print.svg
import './App.css';

import { Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import React from 'react';

import Tank from './Tank.js';
import paw from './pics/paw.svg';

const App = () => (
     <Router>
      <div>
        <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/">home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/about">about</Nav.Link>
  </Nav.Item>
</Nav>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
);

function Home() {
  return (
  <Container className="p-3">
    <Jumbotron className="smart-background App">
      <h1 className="header">Welcome To sotamot</h1>
      <Button href="/game" size="lg">
        start
        <img src={paw} className="paw-button-image" alt="paw" />
      </Button>
    </Jumbotron>
  </Container>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Game() {
  return (
    <Container className="p-3 centered firelands">
  <Row>
    <Col>1 of 1</Col>
    <Col>1 of 1</Col>
  </Row>
      <h1 className="header outlined">Firelands</h1>
      <Container>
        <Tank automatic={true} />
        <Tank />

        <img src={paw} className="paw-button-image" alt="paw" />
      </Container>
    </Container>
  );
}


export default App;
