import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class NameEntry extends React.Component {

    constructor(props) {
      super(props);
      this.state = {fName: props.fName, lName: props.lName};
  
      this.handleFNameChange = this.handleFNameChange.bind(this);
      this.handleLNameChange = this.handleLNameChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.props = props;
    }
  
    handleFNameChange(event) {
      this.setState({fName: event.target.value});
    }
  
    handleLNameChange(event) {
      this.setState({lName: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.fName + " " + this.state.lName);
      event.preventDefault();

      this.props.setFName(this.state.fName);
      this.props.setLName(this.state.lName);

      alert('Information updated successfully');
    }
  
    render() {
      return (
        <div>
            <h2>Your name</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>First name: </span>
              <input type="text" name="fName" value={this.state.fName} onChange={this.handleFNameChange} />
            </label>
            <br></br>
            <label>
              <span>Last name: </span>
              <input type="text" name="lName" value={this.state.lName} onChange={this.handleLNameChange} />
            </label>
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

  export default NameEntry;