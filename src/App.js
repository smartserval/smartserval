import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

const App = () => (
  <Container className="p-3">
    <Jumbotron className="smart-background App">
      <h1 className="header">Welcome To Smart Kids</h1>
      <Button size="lg">start</Button>
    </Jumbotron>
  </Container>
);

export default App;

