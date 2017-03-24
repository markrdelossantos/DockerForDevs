import React from "react";
import LoginAction from "../actions/LoginAction.jsx";

export default class Login extends React.Component {

    render() {
        return (
            <div>
                <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            LoginAction.login("Mark Delos Santos");
        }, 5000);
    }
}
