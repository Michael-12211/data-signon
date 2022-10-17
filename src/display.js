import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Display extends React.Component {
    constructor(props) {
      super(props);

      this.props = props;
    }
  
    
  
    render() {
      return (
        <div className="output">
            <h2>Your information</h2>
            <div>First name: {this.props.fName}</div>
            <div>Last name: {this.props.lName}</div>
            <div>Date of birth: {this.props.birth}</div>
            <div>Gender: {this.props.gender}</div>
            <div>Health card number: {this.props.health}</div>
        </div>
      );
    }
  }

  export default Display;