export const getLocalStorage = (getName) => {
    localStorage.getItem(getName);
};

export const setLocalStorage = (getName, setItem) => {
    localStorage.setItem(getName, setItem);
};

export const removeLocalStorage = (getName) => {
    localStorage.removeItem(getName);
};

export const strngTruncate = (inputString, setLength) => {
    const stringTransform =
        inputString.length <= setLength
            ? inputString
            : inputString.substr(0, inputString.lastIndexOf(' ', setLength - 3)) + '...';

    return stringTransform;
};

export const stringSlug = (inputString) => {
    const stringTransform = inputString
        .replace(/[^A-Za-z0-9\s]/g, '')
        .replace(/ /g, '-')
        .toLowerCase();

    return stringTransform;
};

export const stringSnakeCamel = (inputString) => {
    const stringTransform = inputString.replace(/([-_][a-z])/g, (item) =>
        item.toUpperCase().replace('-', '').replace('_', '')
    );

    return stringTransform;
};

export const stringCamelKebab = (inputString) => {
    const stringTransform = inputString
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
        .toLowerCase();

    return stringTransform;
};

export const checkEmailValid = (inputEmail) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.trim());
};
