import { TruncateCharactersPipe } from '../../src/pipe/truncate-characters.pipe';
describe('TruncateCharactersPipe Tests', function () {
    var input = 'jhipster lover';
    var chars = 13;
    var breakOnWord = false;
    var pipe;
    beforeEach(function () {
        pipe = new TruncateCharactersPipe();
    });
    it('Should return the first word', function () {
        var result = pipe.transform(input, chars, breakOnWord);
        expect(result).toEqual('jhipster...');
    });
});
