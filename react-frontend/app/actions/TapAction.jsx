import $ from "jquery";
import Alt from "alt";

const altInstance = new Alt();

class TapAction {
    constructor() {
    }

    sendTap() {
        const api = "/api/test";

        $.get(api, (data) => {
            console.log("success");
            console.log(data);
        })
        .fail((someError) => {
            console.log(someError);
        });
    }

}

export default altInstance.createActions(TapAction);
