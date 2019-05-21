/*
 Copyright 2013-2019 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://www.jhipster.tech/
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
    let objectList: any[];
    let list: any[];
    let filter;
    beforeEach(() => {
        objectList = [{ value: 'java', extention: 'java', known: true, level: 8 }, { value: 'javaScript', extention: 'js', known: false, level: 0 }, { value: 'TypeScript', extention: 'ts', known: true, level: 5 }];
        pipe = new JhiPureFilterPipe();
    });

    it('Should filter by string', () => {
        list = ['java', 'javaScript', 'TypeScript'];
        const result = pipe.transform(list, 'java');
        expect(result).toEqual(['java', 'javaScript']);
    });

    it('Should filter by string and field', () => {
        filter = 'ts';
        const field = 'extention';
        const result = pipe.transform(objectList, filter, field);
        expect(result).toEqual([{ value: 'TypeScript', extention: 'ts', known: true, level: 5 }]);
    });

    it('should filter by Object', () => {
        filter = { value: 'java', extention: 'java' };
        const result = pipe.transform(objectList, filter);
        expect(result).toEqual([{ value: 'java', extention: 'java', known: true, level: 8 }]);
    });

    it('should filter by Function', () => {
        filter = function () { return 'ts' };
        const field = 'extention';
        const result = pipe.transform(objectList, filter, field);
        expect(result).toEqual([{ value: 'TypeScript', extention: 'ts', known: true, level: 5 }]);
    });

    it('should filter by Boolean', () => {
        filter = true;
        const field = 'known';
        const result = pipe.transform(objectList, filter, field);
        expect(result).toEqual([{ value: 'java', extention: 'java', known: true, level: 8 }, { value: 'TypeScript', extention: 'ts', known: true, level: 5 }])
    });

    it('should filter by Number', () => {
        filter = 5;
        const field = 'level';
        const result = pipe.transform(objectList, filter, field);
        expect(result).toEqual([{ value: 'TypeScript', extention: 'ts', known: true, level: 5 }]);
    });
});
