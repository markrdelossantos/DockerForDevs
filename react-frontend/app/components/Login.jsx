import React from "react";
import Tap from "./Tap.jsx";
import LoginAction from "../actions/LoginAction.jsx";

import $ from "jquery";
import cookie from "react-cookie";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: null,
            login_token: cookie.load("dockerfordevs_login")
        };

        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        var comp = [];
        if (this.state.login_token) {
            console.log("token is " + this.state.login_token);
            comp = <Tap token={this.state.login_token}/>;
        }
        else {
            comp = <div>
                <div className="form-group">
                <input type="text" value={this.state.val} onChange={this.handleChange} className="form-control" placeholder="Enter your name"/>
                </div>
                <button type="submit" onClick={this.onClick} className="btn btn-default">Submit</button>
            </div>;
        }

        return (comp);
    }

    onClick() {
        const api = "/api/tap/login/" + this.state.val;
        $.get(api, (data) => {
            if (data !== "-1") {
                cookie.save("dockerfordevs_login", data,
                    {maxAge: 3600}
                );
                this.setState({
                    login_token: data
                });
                LoginAction.doLogin(this.state.val);
            }
            else {
                console.log("data is -1");
            }
        })
        .fail(() => {
            console.log("Some other error");
        });
    }

    handleChange(evt) {
        this.setState({
            val: evt.target.value
        });
    }
}
