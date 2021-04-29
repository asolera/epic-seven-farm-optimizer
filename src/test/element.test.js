import { expect, test } from '@jest/globals';
import Element from '../js/Entities/Element.js';

test('element description should be the same', () => {
    const element = new Element('Ice');
    expect(element.description).toBe('Ice');
});

test('element description should not be different', () => {
    const element = new Element('Ice');
    expect(element.description).not.toBe('Fire');
    expect(element.description).not.toBe('Earth');
    expect(element.description).not.toBe('Dark');
    expect(element.description).not.toBe('Light');
});

test('element should be one of the these', () => {
    const allowedElements = ['Ice', 'Fire', 'Earth', 'Dark', 'Light'];
    expect(allowedElements).toContain(new Element('Ice').description);
    expect(allowedElements).toContain(new Element('Fire').description);
    expect(allowedElements).toContain(new Element('Earth').description);
    expect(allowedElements).toContain(new Element('Dark').description);
    expect(allowedElements).toContain(new Element('Light').description);
});

test('element description should contain only alphabetical letters', () => {
    try {
        const element = new Element('999');
        expect(element.description).not.toBe('999');
    } catch(err) {
        expect(err.message).toBe('Invalid element description!');
    }
});