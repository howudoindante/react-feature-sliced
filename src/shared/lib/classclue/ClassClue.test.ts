import classClue from './index';

describe('Classname appends right', () => {
    it('Case with one class', () => {
        expect(classClue('class')).toBe('class');
    });

    it('Case with one class and empty dynamic classes object', () => {
        expect(classClue('class', {})).toBe('class');
    });

    it('Case with one class and filled dynamic classes object', () => {
        expect(classClue('class', { test: true })).toBe('class test');

        expect(classClue('class', { test: true, alwaysOn: true })).toBe(
            'class test alwaysOn'
        );

        expect(
            classClue('class', { test: true, alwaysOn: true, alwaysOff: false })
        ).toBe('class test alwaysOn');

        expect(
            classClue('class', { test: true, alwaysOn: true, alwaysOff: true })
        ).toBe('class test alwaysOn alwaysOff');
    });

    it('Case with massive of classes', () => {
        expect(classClue(['class', 'class2'])).toBe('class class2');

        expect(
            classClue(['class', 'class2'], {
                test: true,
                alwaysOn: true,
                alwaysOff: false,
            })
        ).toBe('class class2 test alwaysOn');
    });
});
