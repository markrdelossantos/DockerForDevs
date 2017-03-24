import $ from "jquery";
import Alt from "alt";

const altInstance = new Alt();

class TapAction {
    constructor() {
    }

    sendTest() {
        const api = "/api/test";

        $.get(api, (data) => {
            console.log("success");
            console.log(data);
        })
        .fail((someError) => {
            console.log(someError);
        });
    }

    sendTap(token) {
        console.log(localStorage.getItem("dockerfordevs_login"));
        // const api = "/api/tap/incr/" + token;

        // $.get(api, (data) => {
        //     console.log(data);
        // })
        // .fail((someError) => {
        //     console.log(someError);
        // });
    }

}

export default altInstance.createActions(TapAction);
