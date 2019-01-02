/*
 Copyright 2013-2019 the original author or authors from the JHipster project.

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
import { ActivatedRouteSnapshot } from '@angular/router';
import { TestBed, inject } from '@angular/core/testing';
import { JhiResolvePagingParams } from '../../src/service/resolve-paging-params.service';
import { JhiPaginationUtil } from '../../src/service/pagination-util.service';

describe('ResolvePagingParams  service test', () => {

    describe('ResolvePagingParams Links Service Test', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {
                        provide: JhiPaginationUtil,
                        useValue: new JhiPaginationUtil()
                    }
                ]
            });
        });

        it(`should return default when page and sort and defaultSort is undefined`, inject([JhiResolvePagingParams], (service: JhiResolvePagingParams) => {
            const route = new ActivatedRouteSnapshot();
            route.queryParams = { page: undefined, sort: undefined };
            route.data = { defaultSort: undefined };
            const { page, predicate, ascending } = service.resolve(route, null);

            expect(page).toEqual(1);
            expect(predicate).toEqual('id');
            expect(ascending).toEqual(true);
        }));

    });
});
