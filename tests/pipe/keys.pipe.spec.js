import { KeysPipe } from '../../src/pipe/keys.pipe';
describe('keysPipe Tests', function () {
    var value = { 'one': 1, 'two': 2, 'three': 3 };
    var pipe;
    beforeEach(function () {
        pipe = new KeysPipe();
    });
    it('Should associate key to a value ', function () {
        var result = pipe.transform(value, null);
        expect(result).toEqual([{ key: 'one', value: 1 }, { key: 'two', value: 2 }, { key: 'three', value: 3 }]);
    });
});
