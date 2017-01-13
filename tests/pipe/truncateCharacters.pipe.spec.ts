import {TruncateCharactersPipe} from '../../src/pipe/truncate-characters.pipe';


describe('truncateCharacters Tests', () => {

    let input: any = 'jhipster lover';
    let chars: any = 13;
    let breakOnWord: any = false;
    let pipe: TruncateCharactersPipe;
    beforeEach(() => {
        pipe = new TruncateCharactersPipe();
    });

    it('Should return the first word', () => {
        let result = pipe.transform(input, chars, breakOnWord);

        expect(result).toEqual('jhipster...');
    });
});

