export const useQuery = () => {
    return Object.fromEntries(
        new URLSearchParams(window.location.search).entries(),
    );
};
