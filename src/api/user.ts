export const UserApi = {
    login: "/login",
    getUserInfo: "/user/info",
};

export interface LoginResponse {
    msg: string;
    data: {
        token: string;
        role: string;
    };
}

export interface UserInfoResponse {
    msg: string;
    data: {
        role: string;
    };
}
