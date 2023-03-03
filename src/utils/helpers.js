export const getLocalStorage = (getName) => {
    localStorage.getItem(getName);
};

export const setLocalStorage = (getName, setItem) => {
    localStorage.setItem(getName, setItem);
};

export const removeLocalStorage = (getName) => {
    localStorage.removeItem(getName);
};
