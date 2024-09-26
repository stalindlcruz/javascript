/* Create three functions to work with cookies: ( add, update and delete).
    The add function must receive three parameters:
        1. field name
        2. value and expiration date
        3. the last one should be a default value
            (The default value is tomorrow's date). */



const addingCookie = (name, value, date = 'Fri, 27 Sep 2024 12:00:00 UTC') => {
    document.cookie = `${name}=${value}; expires=${date}; path=/`;
}

const updatingCookie = (name, value, date = 'Fri, 27 Dec 2024 12:00:00 UTC') => {
    deletingCookie(name);
    addingCookie(name, value, date);
}

const deletingCookie = (name) => {
    document.cookie = `${name}=; expires=Mon, 10 Jan 1920 12:00:00 UTC; path=/`;
}

addingCookie('USER1', 'Dahiana Brens', 'Fri, 28 Sep 2024 12:00:00 UTC');
updatingCookie('USER2', 'Florangel Moya', 'Fri, 30 Sep 2024 12:00:00 UTC');
deletingCookie('USER1');