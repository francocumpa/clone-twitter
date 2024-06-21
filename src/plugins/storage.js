import { clear } from "@testing-library/user-event/dist/clear";
import { jwtDecode } from "jwt-decode";

const Storage = {

    get: (key) => {
        if (window.localStorage) {
            return window.localStorage.getItem(`${process.env.REACT_APP_APPNAME}_${key}`);

        }
        return null;
    },
    set: (key, val) => {
        if (window) {

            window.localStorage.setItem(`${process.env.REACT_APP_APPNAME}_${key}`, val);
        }
    },
    decode: (token) => {
        return jwtDecode(token);
    },
    reset: () => {
        if (window.localStorage) {
            window.localStorage.clear();
        }
    }
}

export default Storage;