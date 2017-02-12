import { TruncateWordsPipe } from '../../src/pipe/truncate-words.pipe';
describe('TruncateWordsPipe Tests', function () {
    var pipe;
    var input = 'Jhipster is the best';
    beforeEach(function () {
        pipe = new TruncateWordsPipe();
    });
    it('Should return any', function () {
        var words = -1;
        var result = pipe.transform(input, words);
        expect(result).toBe('');
    });
    it('Should return sentence', function () {
        var words = 3;
        var result = pipe.transform(input, words);
        expect(result).toBe('Jhipster is the...');
    });
});
