export const stringifySearch = (search: any) =>
    "?" +
    Object.entries(search)
        .map(([key, value]) => key + "=" + value)
        .join("&");
