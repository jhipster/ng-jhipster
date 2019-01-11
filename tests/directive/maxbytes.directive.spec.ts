/*
 Copyright 2013-Present the original author or authors from the JHipster project.

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
import { JhiMaxbytesValidatorDirective } from '../../src/directive/maxbytes.directive';
import {FormControl} from '@angular/forms';

describe('JhiMaxbytesValidatorDirective Tests', () => {
    let dir: JhiMaxbytesValidatorDirective;
    let c: FormControl;
    // 84.5 byte sample image, 1x1 transparent pixel in png format
    const sampleImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=';

    beforeEach(() => {
        dir = new JhiMaxbytesValidatorDirective();
        c = new FormControl('', {})
    });

    describe('UI logic tests', () => {
        it('should reject value superior max', () => {
            dir.jhiMaxbytes = 50;
            c.setValue(sampleImage);
            expect(dir.validate(c)).toBeDefined();
            expect(dir.validate(c).maxbytes).toBeDefined();
            expect(dir.validate(c).maxbytes.valid).toBeDefined();
            expect(dir.validate(c).maxbytes.valid).toBe(false);
        });

        it('should validate value equals maxbytes', () => {
            dir.jhiMaxbytes = 84.5;
            c.setValue(sampleImage);
            expect(dir.validate(c)).toBeNull();
        });

        it('should validate value inferior maxbytes', () => {
            dir.jhiMaxbytes = 100;
            c.setValue(sampleImage);
            expect(dir.validate(c)).toBeNull();
        });

        it('should accept null values', () => {
            dir.jhiMaxbytes = 10;
            c.setValue(null);
            expect(dir.validate(c)).toBeNull();
        });
    });
});
