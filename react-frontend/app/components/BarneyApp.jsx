import React from "react";

import Login from "./Login.jsx";

export default class BarneyApp extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Login/>
            </div>
        );
    }
}
