export const saveLocalStorage = (storageName, storageData) => {
    localStorage.setItem(storageName, storageData);
};

export const loadLocalStorage = (storageName) => {
    const data = localStorage.getItem(storageName);
    try {
        return JSON.parse(data); // converts a JSON string into a Javascript Object
    } catch (e) {
        return data;
    }
};

export const cleanLocalStorage = (storageName) => {
    if (storageName) {
        localStorage.removeItem(storageName)
    } else {
        localStorage.clear();
    }
};

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};