import { numberOfBytes } from '../../src/directive/number-of-bytes';

describe('NumberOfBytes Tests', () => {
    let base64String = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    it('should return numberOfBytes in base64String', () => {
        let result = numberOfBytes(base64String);
        expect(result).toBe(47.75);
    });
});
