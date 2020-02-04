import CryptoJS from "crypto-js"

import appConfig from '../constants/appConfig'

export const encrypt = (data) => {
    return {data: CryptoJS.AES.encrypt(JSON.stringify(data), appConfig.projectKey).toString()}
};

export const decrypt = (data) => {
    let here2 = CryptoJS.AES.decrypt(data.toString(), appConfig.projectKey);
    return JSON.parse(here2.toString(CryptoJS.enc.Utf8));
};