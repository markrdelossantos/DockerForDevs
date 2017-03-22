import React from "react";

export default class Navbar extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                    <a href="https://bootswatch.com/" className="navbar-brand">Hypothethical.com</a>
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                    <ul className="nav navbar-nav">
                        <li>
                        <a href="https://bootswatch.com/help/">Company Overview</a>
                        </li>
                        <li>
                        <a href="http://news.bootswatch.com/">About Us</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="http://builtwithbootstrap.com/" target="_blank">Contact Us</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        );
    }

}

