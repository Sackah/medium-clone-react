export class LocalStorageService {
    private static accessTokenKey = "reactAppToken";

    public static getAccessToken() {
        return this.getItem(this.accessTokenKey);
    }

    public static setAccessToken(token: string) {
        return this.setItem(this.accessTokenKey, token);
    }

    public static removeAccessToken() {
        return this.removeItem(this.accessTokenKey);
    }

    public static setItem(key: string, value: string) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public static getItem(key: string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    public static removeItem(key: string) {
        localStorage.removeItem(key);
    }
}
