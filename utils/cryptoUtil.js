const CryptoJS = require("crypto-js");
const AppConfig = require("../config/appConfig");

const encrypt = (data) => {
    if (!data) { return undefined }
    else {
        try {
            return CryptoJS.AES.encrypt(JSON.stringify(data), AppConfig.projectKey).toString()
        } catch (e) {
            return undefined;
        }
    }

};

const decrypt = (data) => {
    let here2 = CryptoJS.AES.decrypt(data.toString(), AppConfig.projectKey);
    try {
        return JSON.parse(here2.toString(CryptoJS.enc.Utf8));
    } catch (e) {
        return undefined;
    }
};

const encryptpass = (password) => {
    if (!password) { return undefined }
    else {
        try {
            let temp = CryptoJS.PBKDF2(password, AppConfig.projectKey, {
                keySize: 128 / 32
            }).toString();
            console.log('pass', password, temp)
            return CryptoJS.PBKDF2(password, AppConfig.projectKey, {
                keySize: 128 / 32
            }).toString();
        } catch (e) {
            return undefined;
        }
    }

};

module.exports = { encrypt, decrypt, encryptpass };



