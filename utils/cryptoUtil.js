const CryptoJS = require("crypto-js");
const AppConfig = require("../config/appConfig");

const cryptoUtils = {
    encrypt: (data) => {
        return CryptoJS.AES.encrypt(JSON.stringify(data), AppConfig.projectKey).toString()
    },
    decrypt: (data) => {
        let here2 = CryptoJS.AES.decrypt(data.toString(), AppConfig.projectKey);
        return JSON.parse(here2.toString(CryptoJS.enc.Utf8));
    }
};

module.exports = cryptoUtils;



