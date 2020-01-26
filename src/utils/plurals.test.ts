import { pluralize } from "./plurals";

describe(pluralize, () => {
    it("adds an s when amount is greater than 1", () => {
        const word = "abc";

        const result = pluralize(word, 2);

        expect(result).toEqual(word + "s");
    });

    it("does not add an s when amount is 1", () => {
        const word = "abc";

        const result = pluralize(word, 1);

        expect(result).toEqual(word);
    })
});
