import alt from "../lib/alt.js";
import LoginAction from "../actions/LoginAction.jsx";

class AppStore {
    constructor() {
        this.state = {
            login_details: null
        };

        this.bindActions(LoginAction);
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin(loginDetails) {
        this.setState({
            login_details: loginDetails
        });
    }
}

export default alt.createStore(AppStore, "AppStore");