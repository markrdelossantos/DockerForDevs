import $ from "jquery";
import Alt from "alt";

const altInstance = new Alt();

class LoginAction {
    constructor() {
    }

    login(user) {
        const api = "/api/tap/login/" + user;

        $.get(api, (data) => {
            localStorage.setItem("dockerfordevs_login", data);
        })
        .fail((someError) => {
            console.log(someError);
        });
    }
}

export default altInstance.createActions(LoginAction);
