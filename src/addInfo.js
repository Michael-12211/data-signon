import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class AddInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {birth: props.birth, health: props.health, gender: props.gender};

      this.handleBirthChange = this.handleBirthChange.bind(this);
      this.handleGenderChange = this.handleGenderChange.bind(this);
      this.handleHealthChange = this.handleHealthChange.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);

      this.props = props;
    }

    handleBirthChange(event) {
        this.setState({birth: event.target.value});
    }

    handleGenderChange(event) {
        this.setState({gender: event.target.value});
    }

    handleHealthChange(event) {
        this.setState({health: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();

        var check = false;
        
        if ((""+this.state.health).length == 10)
        {
            //performing validation on health card number
            var cut = Math.floor(this.state.health / 10);
            //var cut = this.state.health;
            var multiplier = 1;
            var total = 0;
            for (var i = (""+cut).length-1; i >= 0; i--)
            {
                var curr = parseInt((""+cut)[i]); //cutting the last number
                curr = curr * multiplier; //multiplying by the multiplier
                multiplier = (multiplier%2)+1; //alternating the multiplier
                //alert(curr);
                for (var b = 0; b < (""+curr).length; b++) {
                    total += parseInt((""+curr)[b]);
                }
            }

            var result = (10 - (total%10))%10

            var checkSum = parseInt((""+this.state.health)[9]);

            //alert(result + " " + checkSum);

            check = result == checkSum;
        }

        if (check) {
            this.props.setHealth(this.state.health);
            this.props.setBirth(this.state.birth);
            this.props.setGender(this.state.gender);
            alert('Information updated successfully');
        } else {
            alert('Health card number invalid. Please provide a valid number, and try again');
        }
    }
  
    render() {
      return (
        <div className="form">
            <h2>Additional information</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              <span>Birth date: </span>
              <input type="date" name="birth" value={this.state.birth} onChange={this.handleBirthChange} />
            </label>
            <br/>
            <label>
                <span>Gender: </span>
                <select value={this.state.gender} onChange={this.handleGenderChange}>
                <option value="unspecified">Unspecified</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="other">Other</option>
                </select>
            </label>
            <br/>
            <label>
              <span>Health card number: </span>
              <input type="number" name="health" value={this.state.health} onChange={this.handleHealthChange} />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

  export default AddInfo;