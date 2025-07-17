const TOKEN_NAME = "UAdminToken";

export function setToken(token: string) {
    localStorage.setItem(TOKEN_NAME, "Bearer " + token);
}

export function getToken() {
    return localStorage.getItem(TOKEN_NAME);
}

export function removeToken() {
    localStorage.removeItem(TOKEN_NAME);
}
