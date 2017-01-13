import {CapitalizePipe} from '../../src/pipe/capitalize.pipe';


describe('capitalizepipe Tests', () => {

    let value = 'jhipster';
    let pipe: CapitalizePipe;

    beforeEach(() => {
        pipe = new CapitalizePipe();
    });
    it('Should capitalize the first letter and lower the rest in words', () => {
        let result = pipe.transform(value);
        expect(result).toEqual('Jhipster');
    });
});
