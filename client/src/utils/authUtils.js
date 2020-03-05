import jwtDecode from "jwt-decode"
import {loadLocalStorage} from "./commonUtils";
import {MERN_PERMISSION, MERN_TOKEN} from "../constants/appConfig";

let isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        return decoded.exp < Date.now() / 1000;
    } catch (e) {
        return false;
    }
};

let getToken = () => {
    return loadLocalStorage(MERN_TOKEN);
};

export let isAuthenticated = () => {
    return !!getToken() && !isTokenExpired(getToken());
};

export const isAllowed = (itemPermission) => {
    let mernPermission = loadLocalStorage(MERN_PERMISSION);
    return (itemPermission === mernPermission && isAuthenticated());
};
