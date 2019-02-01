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
import { DatePipe } from '@angular/common';
import { inject, TestBed } from '@angular/core/testing';

import { JhiDateUtils } from '../../src/service/date-util.service';

describe('Date Utils service test', () => {

    describe('Date Utils Service Test', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    JhiDateUtils,
                    DatePipe
                ]
            });
        });

        it('should set the pattern to default value', inject([JhiDateUtils], (service: JhiDateUtils) => {
            expect(service.dateformat()).toBe('yyyy-MM-dd');
        }));

        it('should convertDateTimeFromServer to a new date value', inject([JhiDateUtils], (service: JhiDateUtils) => {
            const dateValue = service.convertDateTimeFromServer('2016-05-10 11:00');
            expect(dateValue).toEqual(new Date('2016-05-10 11:00'));
            expect(dateValue instanceof Date).toBe(true);
        }));

        it('should convertDateTimeFromServer to null when date is undefined', inject([JhiDateUtils], (service: JhiDateUtils) => {
            const date = undefined;
            const dateValue = service.convertDateTimeFromServer(date);
            expect(dateValue).toBeNull();
            expect(dateValue instanceof Date).toBe(false);
        }));

        it('should convertLocalDateFromServer to a new date value', inject([JhiDateUtils], (service: JhiDateUtils) => {
            const dateValue = service.convertDateTimeFromServer('2016-05-10');
            expect(dateValue).toEqual(new Date('2016-05-10'));
            expect(dateValue instanceof Date).toBe(true);
        }));

        it('should convertLocalDateFromServer to null when date is undefined', inject([JhiDateUtils], (service: JhiDateUtils) => {
            const date = undefined;
            const dateValue = service.convertLocalDateFromServer(date);
            expect(dateValue).toBeNull();
            expect(dateValue instanceof Date).toBe(false);
        }));

        it('should convertLocalDateToServer to default date pattern', inject([JhiDateUtils], (service: JhiDateUtils) => {
            const dateValue = service.convertLocalDateToServer({year: 2016, month: 5, day: 10});
            expect(dateValue).toEqual('2016-05-10');
        }));

        it('should convertLocalDateToServer to specified date pattern', inject([JhiDateUtils], (service: JhiDateUtils) => {
            const dateValue = service.convertLocalDateToServer({year: 2016, month: 5, day: 10}, 'yyyy');
            expect(dateValue).toEqual('2016');
        }));

        it('should toDate convert datetime-local to date', inject([JhiDateUtils], (service: JhiDateUtils) => {
            const date = '2016-05-10T23:20:50.567';
            const dateValue = service.toDate(date);
            expect(dateValue).toEqual(new Date('2016-05-10 23:20:50.567'));
            expect(dateValue instanceof Date).toBe(true);
        }));

        it('should toDate to null when input is undefined', inject([JhiDateUtils], (service: JhiDateUtils) => {
            const date = undefined;
            const dateValue = service.toDate(date);
            expect(dateValue).toBeNull();
            expect(dateValue instanceof Date).toBe(false);
        }));

        it('should toDate to null when input is null', inject([JhiDateUtils], (service: JhiDateUtils) => {
            const date = null;
            const dateValue = service.toDate(date);
            expect(dateValue).toBeNull();
            expect(dateValue instanceof Date).toBe(false);
        }));
    });
});
