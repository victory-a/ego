export const setStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export const getStorage = key => JSON.parse(localStorage.getItem(key));

export const removeFromStorage = key => localStorage.removeItem(key);
