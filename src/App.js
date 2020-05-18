// npm run storybook
// https://upload.wikimedia.org/wikipedia/commons/5/51/Paw-print.svg
import './App.css';

import {
  Button,
  Col,
  Container,
  Form,
  Jumbotron,
  Nav,
  Row
} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';

import Tank from './Tank.js';
import paw from './pics/paw.svg';

const App = () => (
  <Router>
    <div>
      <Nav
      activeKey="/home"
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
        <Nav.Item>
          <Nav.Link href="/">home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile">profile</Nav.Link>
        </Nav.Item>
      </Nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
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

function Profile() {
  return (
    <Container className="p-3 smart-background centered">
      <h1 className="header outlined">Profile</h1>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose your name!</Form.Label>
          <Form.Control as="select">
            <option>Ellen</option>
            <option>Abby</option>
            <option>David</option>
            <option>Danny</option>
            <option>Lila</option>
          </Form.Control>
        </Form.Group>
    </Form>
    </Container>
  );
}

function Game() {
  return (
    <Container className="p-3 centered firelands">
      <Row>
        <Col>
          <Tank automatic={true} />
        </Col>
        <Col>
          <Tank />
        </Col>
      </Row>
      <h1 className="header outlined">Firelands</h1>
      <Container>

        <img src={paw} className="paw-button-image" alt="paw" />
      </Container>
    </Container>
  );
}

export default App;
