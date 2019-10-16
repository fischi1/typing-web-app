const loadFromLocalStorage = <T>(key: string, defaultData: T) => {    
    const str = localStorage.getItem(key);
    if(!str)
        return defaultData;
    else {
        const loadedData = JSON.parse(str);
        return loadedData;
    }
}

export default loadFromLocalStorage;