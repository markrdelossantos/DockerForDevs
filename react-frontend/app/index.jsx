import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./components/Navbar.jsx";
import BarneyApp from "./components/BarneyApp.jsx";
import Placeholder from "./components/Placeholder.jsx";
import {Router, Route, IndexRoute} from "react-router";

import Link from "react-router";

class Main extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <a href="https://bootswatch.com/" className="navbar-brand">Hypothethical.com</a>
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                    <ul className="nav navbar-nav">
                        <li>
                        <Link to="/">Company Overview</Link>
                        </li>
                        <li>
                        <Link to="/">Barney's App</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
                {this.props.children}
            </div>
        );
    }
}

Main.propTypes = {
    children: React.PropTypes.element
};


const app = document.getElementById("app");
ReactDOM.render(
    <Router>
        <Route path="/" component={Main}>
            <IndexRoute component={Placeholder}/>
            <Route path="/barneyApp" component={BarneyApp}/>
        </Route>
    </Router>, app);
