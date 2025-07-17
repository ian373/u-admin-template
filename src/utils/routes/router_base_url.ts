export function getRouterBaseUrl() {
    const url = import.meta.env.VITE_ROUTER_BASE_URL as string | undefined;

    if (url) {
        if (url.startsWith("/") && url.endsWith("/")) {
            return url;
        }
    }

    return "";
}
