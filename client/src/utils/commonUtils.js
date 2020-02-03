export const saveLocalStorage = (storageName, storageData) => {
    localStorage.setItem(storageName, storageData);
};

export const loadLocalStorage = (storageName) => {
    localStorage.getItem(storageName);
};

export const cleanLocalStorage = (storageName) =>{
    if(storageName){
        localStorage.removeItem(storageName)
    }else{
        localStorage.clear();
    }
};