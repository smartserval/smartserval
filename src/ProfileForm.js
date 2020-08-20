import { Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';

import { useHistory } from "react-router";

function ProfileForm() {
      let history = useHistory();
  const [name, setName] = useState('pinky');
  const [grade, setGrade] = useState('1');

  const handleChange = event => {
    setName(event.target.value);
  }

  const handleChangeGrade = event => {
    setGrade(event.target.value);
  }

  const  handleSubmit = event => {
    history.push('/game');
    event.preventDefault();
  }

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose your name!</Form.Label>
          <Form.Control as="select" value={name} onChange={handleChange}>
            <option>Ellen</option>
            <option>Abby</option>
            <option>David</option>
            <option>Danny</option>
            <option>Sam</option>
            <option>Lila</option>
            <option>Emma</option>
            <option>Max</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="gradeLevel">
          <Form.Label>Choose your grade!</Form.Label>
          <Form.Control as="select" value={grade} onChange={handleChangeGrade}>
            <option>K</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Done!
        </Button>
      </Form>
    );
}

export default withRouter(ProfileForm)
