import {TruncateWordsPipe} from '../../src/pipe/truncate-words.pipe';

describe('TruncateWordsPipe Tests', () => {
    let pipe: TruncateWordsPipe;
    let input: any = 'Jhipster is the best framework';
    beforeEach(() => {
        pipe = new TruncateWordsPipe();
    });

    it('Should return an empty string', () => {
        let words: any = -1;
        let result = pipe.transform(input, words);
        expect(result).toBe('');
    });
        it('Should return sentence', () => {
        let words: any = 3;
        let result = pipe.transform(input, words);
        expect(result).toBe('Jhipster is the...');
    });
});
