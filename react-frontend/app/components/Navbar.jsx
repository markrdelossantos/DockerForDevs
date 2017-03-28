import React from "react";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
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
                    {/*<ul className="nav navbar-nav">
                        <li>
                        <Link to="/">Company Overview</Link>
                        </li>
                        <li>
                        <Link to="/">Barney's App</Link>
                        </li>
                    </ul>*/}
                    <ul className="nav navbar-nav navbar-right">
                        <li>{this.props.login}</li>
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