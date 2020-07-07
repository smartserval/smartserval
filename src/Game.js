import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';

import Tank from './Tank';
import paw from './pics/paw.svg';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
    <Container className="p-3 centered firelands">
      <Row>
        <Col>
          <Tank />
        </Col>
        <Col>
          <Tank automatic={true} />
        </Col>
      </Row>
      <h1 className="header outlined">Firelands</h1>
      <Container>
        <img src={paw} className="paw-button-image" alt="paw" />
      </Container>
    </Container>
    );
  }
}

export default ProfileForm
