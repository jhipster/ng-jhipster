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
import { DatePipe } from '@angular/common';

import { DateUtils } from '../../src/service/date-util.service';

describe('Date Utils service test', () => {

    describe('Date Utils Service Test', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    DateUtils,
                    DatePipe
                ]
            });
        });

        it('should set the pattern to default value', inject([DateUtils], (service: DateUtils) => {
            expect(service.dateformat()).toBe('yyyy-MM-dd');
        }));

        it('should convertDateTimeFromServer to a new date value', inject([DateUtils], (service: DateUtils) => {
            let dateValue = service.convertDateTimeFromServer('2016-05-10 11:00');
            expect(dateValue).toEqual(new Date('2016-05-10 11:00'));
            expect(dateValue instanceof Date).toBe(true);
        }));

        it('should convertDateTimeFromServer to null when date is undefined', inject([DateUtils], (service: DateUtils) => {
            let date;
            let dateValue = service.convertDateTimeFromServer(date);
            expect(dateValue).toBeNull;
            expect(dateValue instanceof Date).toBe(false);
        }));

        it('should convertLocalDateFromServer to a new date value', inject([DateUtils], (service: DateUtils) => {
            let dateValue = service.convertDateTimeFromServer('2016-05-10');
            expect(dateValue).toEqual(new Date('2016-05-10'));
            expect(dateValue instanceof Date).toBe(true);
        }));

        it('should convertLocalDateFromServer to null when date is undefined', inject([DateUtils], (service: DateUtils) => {
            let date;
            let dateValue = service.convertLocalDateFromServer(date);
            expect(dateValue).toBeNull;
            expect(dateValue instanceof Date).toBe(false);
        }));

        it('should convertLocalDateToServer to default date pattern', inject([DateUtils], (service: DateUtils) => {
            let dateValue = service.convertLocalDateToServer({year: 2016, month: 5, day: 10});
            expect(dateValue).toEqual('2016-05-10');
        }));

        it('should convertLocalDateToServer to specified date pattern', inject([DateUtils], (service: DateUtils) => {
            let dateValue = service.convertLocalDateToServer({year: 2016, month: 5, day: 10}, 'yyyy');
            expect(dateValue).toEqual('2016');
        }));
    });
});
