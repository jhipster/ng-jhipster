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
import {JhiCapitalizePipe} from '../../src/pipe/capitalize.pipe';

describe('CapitalizePipe Tests', () => {
    let pipe: JhiCapitalizePipe;

    beforeEach(() => {
        pipe = new JhiCapitalizePipe();
    });
    it('Should capitalize the first letter and lower the rest in words', () => {
        const result = pipe.transform('jhipster');
        expect(result).toEqual('Jhipster');
    });
    it('Should capitalize the first letter and lower the rest for a sentence', () => {
        const result = pipe.transform('jhipster Test this Sentence');
        expect(result).toEqual('Jhipster test this sentence');
    });
    it('Should capitalize the first letter and lower the rest in words in different case', () => {
        let result = pipe.transform('camelCase');
        expect(result).toEqual('Camelcase');
        result = pipe.transform('snake_case');
        expect(result).toEqual('Snake_case');
        result = pipe.transform('kebab-case');
        expect(result).toEqual('Kebab-case');
    });
});
