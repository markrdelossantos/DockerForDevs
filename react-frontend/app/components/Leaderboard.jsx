import React from "react";

export default class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const api = "/api/tap/leaderboard";
        $.get(api, (data) => {
            console.log(data);
        });
    }

    render() {
        return ();
    }
}