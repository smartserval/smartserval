import { Button, Form } from 'react-bootstrap';
import React from 'react';

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
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Choose your name!</Form.Label>
          <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
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
        <Button variant="primary" type="submit">
          Done!
        </Button>
      </Form>
    );
  }
}

export default ProfileForm
