import React from "react";
import $ from "jquery";

export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: []
        };
        this.poll = this.poll.bind(this);
    }

    componentDidMount() {
        setInterval(this.poll, 500);
    }

    poll() {
        const api = "/api/tap/leaderboard";
        $.get(api, (data) => {
            this.setState({scores: data});
        });
    }

    render() {
        var scores = this.state.scores;
        var scoreSheets = [];

        if (scores.length > 0) {
            for (var i = 0; i < scores.length; i++) {
                let current = scores[i];
                scoreSheets.push(
                <div>
                    <ScoreSheet name={current.name} score={current.score}></ScoreSheet>
                    <br/>
                </div>);
            }
        }
        return (
            <div>
            <br/><br/>
            <ul className="nav nav-pills">
                {scoreSheets}
            </ul></div>);
    }
}

class ScoreSheet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="active">
                {this.props.name}
                <span className="badge">{this.props.score}</span>
            </li>
        );
    }

}
