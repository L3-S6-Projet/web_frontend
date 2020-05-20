const key = 'profile';

export function setLoggedIn(response) {
    localStorage.setItem(key, JSON.stringify(response));
}

export function isLoggedIn() {
    return localStorage.hasOwnProperty(key);
}

export function getUser() {
    return JSON.parse(localStorage.getItem(key));
}

export function logout() {
    localStorage.removeItem(key);
}

export function getUserKind() {
    const user = getUser();
    const serializedRole = user.user.kind;

    return {
        administrator: serializedRole === 'ADM',
        teacher: serializedRole === 'TEA',
        student: serializedRole === 'STU',
    };
}
