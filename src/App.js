import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NameEntry from "./nameEntry";
import AddInfo from "./addInfo";
import Display from "./display";
import Home from './Home';

import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";

function App () {
    const [fName, setFName] = useState(() => {return "";});
    const [lName, setLName] = useState(() => {return "";});
    const [birth, setBirth] = useState(() => {return "2001-01-01";});
    const [health, setHealth] = useState(() => {return 2222222222;});
    const [gender, setGender] = useState(() => {return "unspecified";});

    return (
        <HashRouter>
            <div>
                <h1 className='Title'>Registry</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><NavLink to="/NameEntry">Name</NavLink></td>
                            <td><NavLink to="/AddInfo">Additional information</NavLink></td>
                            <td><NavLink to="/Display">View current information</NavLink></td>
                        </tr>
                    </tbody>
                </table>
                <div className="content">
                    <br/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/NameEntry" element={<NameEntry fName={fName} setFName={setFName} lName={lName} setLName={setLName}/>}/>
                    <Route path="/AddInfo" element={<AddInfo birth={birth} setBirth={setBirth} health={health} setHealth={setHealth} gender={gender} setGender={setGender}/>}/>
                    <Route path="/Display" element={<Display fName={fName} lName={lName} birth={birth} health={health} gender={gender}/>}/>
                </Routes>
                </div>
            </div>
          <footer className="footer">
            Michael Kempe, 2022
          </footer>
        </HashRouter>
    )
}

export default App;