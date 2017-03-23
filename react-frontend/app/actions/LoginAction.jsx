import $ from "jquery";
import Alt from "alt";
import JWT from "jsonwebtoken";

const altInstance = new Alt();

class LoginAction {
    constructor() {
    }

    login(user) {
        // TODO: lazy..  very bad.. hide this somewhere else or assign on NODE.env
        const secret = "sikretongmalupet123456";
        const api = "/api/login/";
        const config = {
            expiresIn: 60 * 60 * 24
        };

        // Generate JWT token...
        // let token = JWT.sign(user, secret, config);
        // console.log(token);
        // return (dispatch) => {
        //     $.get(api + token, (data) => {
        //         dispatch(data);
        //     }).fail((something) => {
        //         console.log(something);
        //     });
        // };
    }
}

export default altInstance.createActions(LoginAction);
