import React from "react";
import TapAction from "../actions/TapAction.jsx";

// test
import LoginAction from "../actions/LoginAction.jsx";

export default class Tap extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // TapAction.sendTap();
        LoginAction.login("Mark");
    }

    render() {
        return (
            <div className="container fill">
                <div id="map" className="btn btn-default btn-lg btn-block">Tap!</div>
            </div>
        );
    }
}
