export const TOKEN_KEY_NAME = "UAdminToken";

export function setToken(token: string) {
    localStorage.setItem(TOKEN_KEY_NAME, "Bearer " + token);
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY_NAME);
}

export function removeToken() {
    localStorage.removeItem(TOKEN_KEY_NAME);
}
