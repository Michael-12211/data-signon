import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NameEntry from "./nameEntry";
import AddInfo from "./addInfo";
import { useState } from 'react';

import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";
import App from './App';


class Main extends React.Component {

  render() {

    return (
      <App/>
    )
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);