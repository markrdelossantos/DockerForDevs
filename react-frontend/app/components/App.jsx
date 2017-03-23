import React from "react";

import Navbar from "./Navbar.jsx";
import Tap from "./Tap.jsx";

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <Tap/>
            </div>
        );
    }
}
