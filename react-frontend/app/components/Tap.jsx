import React from "react";
import TapAction from "../actions/TapAction.jsx";

export default class Tap extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log("Tapping " + this.props.token);
        TapAction.sendTap(this.props.token);

    }

    render() {
        return (
            <div className="container fill">
                <div id="map" onClick={this.onClick} className="btn btn-default btn-lg btn-block">Tap this to gain points!</div>
            </div>
        );
    }
}
