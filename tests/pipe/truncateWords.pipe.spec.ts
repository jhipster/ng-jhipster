import { TruncateWordsPipe } from '../../src/pipe/truncate-words.pipe';

describe('TruncateWordsPipe Tests', () => {
    let pipe: TruncateWordsPipe;
    let input = 'Jhipster is the best';
    beforeEach(() => {
        pipe = new TruncateWordsPipe();
    });

    it('Should return any', () => {
        let words: any = -1;
        let result = pipe.transform(input, words);
        expect(result).toBe('');
    });

    it('Should return sentence', () => {
        let words = 3;
        let result = pipe.transform(input, words);
        expect(result).toBe('Jhipster is the...');
    });
});
