import React from "react";

import Navbar from "./Navbar.jsx";
import Tap from "./Tap.jsx";
import Login from "./Login.jsx"

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        var comp = [];

        if(localStorage.getItem("dockerfordevs_login")){
            comp = <Tap/>
        }
        else {
            comp = <Login/>
        }


        return (
            <div>
                <Navbar/>
                {comp}
            </div>
        );
    }
}
