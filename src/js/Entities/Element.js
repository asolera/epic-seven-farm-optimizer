export default class Element {

    #description;

    constructor(description) {
        this.#description = this.#validate(description);
    }

    get description() {
        return this.#description;
    }

    #validate(description) {
        description = this.#validateLetters(description);
        description = this.#validateAllowedElements(description);
        return description;
    }

    #validateLetters(description) {
        const regexp = /^[a-zA-Z]*$/;
        if (!description.match(regexp)) throw Error('Invalid element description!');
        return description;
    }

    #validateAllowedElements(description) {
        const allowedElements = ['Ice', 'Fire', 'Earth', 'Dark', 'Light'];
        if (!allowedElements.includes(description)) throw Error('Element description not allowed!');
        return description;
    }
}