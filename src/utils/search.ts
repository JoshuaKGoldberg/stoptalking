export const stringifySearch = (search: any) =>
    "?" +
    Object.entries(search)
        .filter(([_, value]) => value !== false && value != null)
        .map(stringifyPair)
        .join("&");

const stringifyPair = ([key, value]: [string, any]) => {
    if (value === true) {
        return key;
    }

    return key + "=" + value;
};
