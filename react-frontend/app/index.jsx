import React from "react";
import ReactDOM from "react-dom";

import Leaderboard from "./components/Leaderboard.jsx";
import BarneyApp from "./components/BarneyApp.jsx";
import Navbar from "./components/Navbar.jsx";
import {Router, Route, IndexRoute} from "react-router";

class Main extends React.Component {
    render() {
        return (
            <Navbar abc={this.props.children} />
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
            <IndexRoute component={BarneyApp}/>
            <Route path="/leaderboard" component={Leaderboard}/>
        </Route>
    </Router>, app);
