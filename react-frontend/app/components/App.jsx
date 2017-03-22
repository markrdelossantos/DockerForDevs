import React from "react";

import Navbar from "./Navbar.jsx";
import TapClone from "./TapClone.jsx";

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Navbar/>
                <TapClone/>
            </div>
        );
    }
}
