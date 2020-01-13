export const pluralize = (word: string, amount: number) => {
    return amount === 1 ? word : `${word}s`;
};
