import React, {Component} from 'react';
import {Form,FormGroup, FormControl, Button} from 'react-bootstrap';
import axios from 'axios';

class EntryForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
   this.setState({ value: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();
    const number = {
      value: e.target[0].value
    }
    e.target.reset();
    axios.post('/', number)
    .then(response => this.props.callBack(response))
    .catch(error => console.error('Error:', error));
  }
  getValidationState() {
    const number = parseInt(this.state.value);
    if (number) {
      return 'success';}
    else {return 'error';}
  }

  render(){
    return  (
      <div className="form-wrapper">
        <Form onSubmit={this.handleSubmit} className="form">
        <h3>Frequency Calculator</h3>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <FormControl
              type="number"
              placeholder="Enter the number"
              onChange={this.handleChange}
              required
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button onSubmit={this.handleSubmit} className="submit-button" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default EntryForm;
