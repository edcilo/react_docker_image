import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import axios from 'axios';


class Test extends React.Component {
    async getUser() {
        const dev = "https://msdev.graviti.mx";
        const stg = "https://msstg.graviti.mx";
        const res = await axios.get(`${dev}/api/v1/fm-engine/about`, {
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjUyOWFlMGVkLTU5MDItNDcyZS1iYjRiLTIyYjIyNzYzYjE0NSIsInJvbGUiOnsibmFtZSI6ImFkbWluIn0sImV4cCI6MjY0NDM4MzczNX0.t2e3ZzMJPfqdpOPFqpv5OHULyJKCxN2Y43OCWgJPaqk",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            params: {}
        });

        console.log("????users", res);
    }

    componentDidMount() {
        this.getUser();
    }

    render() {
        return (
            <p>Hola mundo</p>
        );
    }
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Test />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
