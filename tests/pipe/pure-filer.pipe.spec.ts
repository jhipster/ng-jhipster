import { PureFilterPipe } from '../../src/pipe/pure-filter.pipe';

describe('PureFilterPipe Tests', () => {
    let pipe: PureFilterPipe;
    let list: Array<any>;
    let filter;
    beforeEach(() => {
        pipe = new PureFilterPipe();
    });

    it('Should filter by  string', () => {
        list = ['java', 'javaScript', 'TypeScript'];
        const result = pipe.transform(list, 'java', null);
        expect(result).toEqual(['java', 'javaScript']);
    });

    it('Should filter by  string and field', () => {
        list = [{ value: 'java', extention: 'java' }, { value: 'javaScript', extention: 'js' }, { value: 'TypeScript', extention: 'ts' }];
        filter = 'ts';
        let field = 'extention';
        const result = pipe.transform(list, filter, field);
        expect(result).toEqual([{ value: 'TypeScript', extention: 'ts' }]);
    });

    it('should filter by Object', () => {
        list = [{ value: 'java' }, { value: 'javaScript' }, { value: 'TypeScript' }];
        filter = { value: 'java' };
        const result = pipe.transform(list, filter, null);
        expect(result).toEqual([{ value: 'java' }, { value: 'javaScript' }]);
    });
});
