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
        var scores = this.jsonBubbleSort(this.state.scores);
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

    jsonBubbleSort(arr) {
        var len = arr.length;
        for (var i = len - 1; i >= 0; i--) {
            for (var j = 1; j <= i; j++) {
                console.log(`comparing ${arr[j - 1].name} (${arr[j - 1].score}) and ${arr[j].name}(${arr[j].score})`);
                if (parseInt(arr[j - 1].score, 10) < parseInt(arr[j].score, 10)) {
                    console.log(` ${arr[j - 1].name}'s score is greater, swapping...`);
                    var temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        return arr;
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
