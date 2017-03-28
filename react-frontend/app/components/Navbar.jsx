import React from "react";

import AppStore from "../stores/AppStore.jsx";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {login: null};

        this.storeChanged = this.storeChanged.bind(this);
    }

    componentDidMount() {
        AppStore.listen(this.storeChanged);
    }

    storeChanged(evt) {
        if (evt.login_details) {
            this.setState({login: evt.login_details});
        }
    }

    render() {
        return (
            <div>
                <div>
                <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <a href="#" className="navbar-brand">Hypothethical.com</a>
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                    <ul className="nav navbar-nav navbar-right">
                        <li>{this.state.login}</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
                {this.props.abc}
            </div>
        );
    }
}
