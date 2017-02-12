import { PureFilterPipe } from '../../src/pipe/pure-filter.pipe';
describe('PureFilterPipe Tests', function () {
    var pipe;
    var list;
    var filter;
    beforeEach(function () {
        pipe = new PureFilterPipe();
    });
    it('Should filter by  string', function () {
        list = ['java', 'javaScript', 'TypeScript'];
        var result = pipe.transform(list, 'java', null);
        expect(result).toEqual(['java', 'javaScript']);
    });
    it('Should filter by  string and field', function () {
        list = [{ value: 'java', extention: 'java' }, { value: 'javaScript', extention: 'js' }, { value: 'TypeScript', extention: 'ts' }];
        filter = 'ts';
        var field = 'extention';
        var result = pipe.transform(list, filter, field);
        expect(result).toEqual([{ value: 'TypeScript', extention: 'ts' }]);
    });
    it('should filter by Object', function () {
        list = [{ value: 'java' }, { value: 'javaScript' }, { value: 'TypeScript' }];
        filter = { value: 'java' };
        var result = pipe.transform(list, filter, null);
        expect(result).toEqual([{ value: 'java' }, { value: 'javaScript' }]);
    });
});
