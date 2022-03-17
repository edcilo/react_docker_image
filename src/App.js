import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import axios from 'axios';


class Test extends Component {
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
            <p>v1.0.18</p>
        );
    }
}

function Home() {
    return (
        <div className="home">
            <p>Home react</p>
        </div>
    );
}

function About() {
    return (
        <div className="about">
            <p>About react</p>
        </div>
    );
}


function App() {
    return (
        <Router basename="/front/v1/react">
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <Test />

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default App;
