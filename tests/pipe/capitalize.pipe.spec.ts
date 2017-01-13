import {CapitalizePipe} from '../../src/pipe/capitalize.pipe';


describe('CapitalizePipe Tests', () => {
    let pipe: CapitalizePipe;

    beforeEach(() => {
        pipe = new CapitalizePipe();
    });
    it('Should capitalize the first letter and lower the rest in words', () => {
        const result = pipe.transform('jhipster');
        expect(result).toEqual('Jhipster');
    });
    it('Should capitalize the first letter and lower the rest for a sentence', () => {
        let result = pipe.transform('jhipster Test this Sentence');
        expect(result).toEqual('Jhipster test this sentence');
    });
    it('Should capitalize the first letter and lower the rest in words in different case', () => {
        let result = pipe.transform('camelCase');
        expect(result).toEqual('Camelcase');
        result = pipe.transform('snake_case');
        expect(result).toEqual('Snake_case');
        result = pipe.transform('kebab-case');
        expect(result).toEqual('Kebab-case');
    });
});
