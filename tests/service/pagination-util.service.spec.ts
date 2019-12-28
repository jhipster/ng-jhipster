/*
 Copyright 2013-2020 the original author or authors from the JHipster project.

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
import { inject, TestBed } from '@angular/core/testing';

import { JhiPaginationUtil } from '../../src/service/pagination-util.service';

describe('Pagination Util service test', () => {

    describe('Pagination Util Service Test', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    JhiPaginationUtil
                ]
            });
        });

        it('should return true when no sort is defined', inject([JhiPaginationUtil], (service: JhiPaginationUtil) => {
            const sort = 'id';
            expect(service.parseAscending(sort)).toBeTruthy();
        }));

        it('should return true when sort is ascending', inject([JhiPaginationUtil], (service: JhiPaginationUtil) => {
            const sort = 'id,asc';
            expect(service.parseAscending(sort)).toBeTruthy();
        }));

        it('should return false when sort is descending', inject([JhiPaginationUtil], (service: JhiPaginationUtil) => {
            const sort = 'id,desc';
            expect(service.parseAscending(sort)).toBeFalsy();
        }));

        it('should return the number for the pagenumber sent', inject([JhiPaginationUtil], (service: JhiPaginationUtil) => {
            const sort = '1';
            expect(service.parsePage(sort)).toBe(1);
        }));

        it('should return the NAN error for not valid pagenumber sent', inject([JhiPaginationUtil], (service: JhiPaginationUtil) => {
            const sort = 'asdas';
            expect(service.parsePage(sort)).toBeNaN();
        }));

        it('should return only the predicate when sort is sent', inject([JhiPaginationUtil], (service: JhiPaginationUtil) => {
            const sort = 'id,asc';
            expect(service.parsePredicate(sort)).toBe('id');
        }));

    });
});
