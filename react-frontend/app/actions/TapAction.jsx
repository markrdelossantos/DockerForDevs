import $ from "jquery";
import alt from "../lib/alt";

class TapAction {
    constructor() {
    }

    sendTap(token) {
        console.log("sending token... " + token);
        const api = "/api/tap/incr/" + token;

        $.get(api)
        .fail(() => {
            console.log("failed to tap (server maybe down)...");
        });
        return true;
    }

}

export default alt.createActions(TapAction);
