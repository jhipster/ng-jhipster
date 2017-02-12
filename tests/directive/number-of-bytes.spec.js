import { numberOfBytes } from '../../src/directive/number-of-bytes';
describe('NumberOfBytes Tests', function () {
    var base64String = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    it('should return numberOfBytes in base64String', function () {
        var result = numberOfBytes(base64String);
        expect(result).toBe(47.75);
    });
});
