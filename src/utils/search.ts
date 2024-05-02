export const stringifySearch = (
    search: Record<string, boolean | null | number | string>,
) =>
    "?" +
    Object.entries(search)
        .filter(([, value]) => value !== false && value != null)
        .map(stringifyPair)
        .join("&");

const stringifyPair = ([key, value]: [
    string,
    boolean | null | number | string,
]) => {
    if (value === true) {
        return key;
    }

    return key + "=" + value;
};
