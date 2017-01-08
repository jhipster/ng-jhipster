/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TestBed, inject } from '@angular/core/testing';

import { Base64 } from '../../src/service/base64.service';

describe('Data Utils service test', () => {

    describe('Data Utils Service Test', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    Base64
                ]
            });
        });

        it('should encode the text', inject([Base64], (service: Base64) => {
            expect(service.encode('Hello Jhipster')).toBe('SGVsbG8gSmhpcHN0ZXI=');
        }));

        it('should decode the encoded text', inject([Base64], (service: Base64) => {
            expect(service.decode('SGVsbG8gSmhpcHN0ZXI=')).toBe('Hello Jhipster');
        }));
    });
});
