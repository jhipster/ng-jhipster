import {TruncateCharactersPipe} from '../../src/pipe/truncate-characters.pipe'

describe('truncateCharacters Tests', () => {

    let input: string = "jhipster lover";
    let chars : number = 13;
    let breakOnWord:boolean = false;
    let pipe:TruncateCharactersPipe;
    beforeEach(() => {
        pipe = new TruncateCharactersPipe();
    });

    it('Should return the first word', () => {
        var result = pipe.transform(input,chars ,breakOnWord);

        expect(result).toEqual("jhipster...");
    });
});

