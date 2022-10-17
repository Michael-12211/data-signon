import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Home extends React.Component {
    constructor(props) {
      super(props);

      this.props = props;
    }
  
    
  
    render() {
      return (
        <h2 className="center">
            Welcome! Use the options above to navigate.
        </h2>
      );
    }
  }

  export default Home;