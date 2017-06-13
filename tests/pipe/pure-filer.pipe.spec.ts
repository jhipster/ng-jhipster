/*
 Copyright 2013-2017 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://jhipster.github.io/
 for more information.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import { JhiPureFilterPipe } from '../../src/pipe/pure-filter.pipe';

describe('PureFilterPipe Tests', () => {
    let pipe: JhiPureFilterPipe;
    let list: Array<any>;
    let filter;
    beforeEach(() => {
        pipe = new JhiPureFilterPipe();
    });

    it('Should filter by  string', () => {
        list = ['java', 'javaScript', 'TypeScript'];
        const result = pipe.transform(list, 'java', null);
        expect(result).toEqual(['java', 'javaScript']);
    });

    it('Should filter by  string and field', () => {
        list = [{ value: 'java', extention: 'java' }, { value: 'javaScript', extention: 'js' }, { value: 'TypeScript', extention: 'ts' }];
        filter = 'ts';
        const field = 'extention';
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
