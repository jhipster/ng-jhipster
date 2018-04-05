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
import { JhiResolvePagingParams, JhiPaginationUtil } from '../..';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TestBed, inject } from '@angular/core/testing';

describe('ResolvePagingParams  service test', () => {

    describe('ResolvePagingParams Links Service Test', () => {
        let resolver: JhiResolvePagingParams;
        let route: ActivatedRouteSnapshot;

        beforeEach(() => {
            resolver = new JhiResolvePagingParams(new JhiPaginationUtil());
            route = new ActivatedRouteSnapshot();
            TestBed.configureTestingModule({
                providers: [
                    JhiResolvePagingParams,
                    JhiPaginationUtil
                ]
            });
        });

        it(`should return { page: 1, predicate: 'id',ascending: true } when page and sort and defaultSort is undefined` ,
            inject([JhiResolvePagingParams], (service: JhiResolvePagingParams) => {
            route.queryParams = { page: undefined, sort: undefined };
            route.data = { defaultSort: undefined };
            const { page, predicate, ascending } = resolver.resolve(route, null);

            expect(page).toEqual(1);
            expect(predicate).toEqual('id');
            expect(ascending).toEqual(true);
        }));

    });
});
