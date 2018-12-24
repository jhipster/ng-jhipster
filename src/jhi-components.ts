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
import { JhiBooleanComponent } from './component/jhi-boolean.component';
import { JhiItemCountComponent } from './component/jhi-item-count.component';
import { JhiMaxValidatorDirective } from './directive/max.directive';
import { JhiMaxbytesValidatorDirective } from './directive/maxbytes.directive';
import { JhiMinValidatorDirective } from './directive/min.directive';
import { JhiMinbytesValidatorDirective } from './directive/minbytes.directive';
import { JhiSortByDirective } from './directive/sort-by.directive';
import { JhiSortDirective } from './directive/sort.directive';
import { JhiCapitalizePipe } from './pipe/capitalize.pipe';
import { JhiFilterPipe } from './pipe/filter.pipe';
import { JhiKeysPipe } from './pipe/keys.pipe';
import { JhiOrderByPipe } from './pipe/order-by.pipe';
import { JhiPureFilterPipe } from './pipe/pure-filter.pipe';
import { JhiTruncateCharactersPipe } from './pipe/truncate-characters.pipe';
import { JhiTruncateWordsPipe } from './pipe/truncate-words.pipe';
import {
    JhiJvmMemoryComponent,
    JhiJvmThreadsComponent,
    JhiMetricsHttpRequestComponent,
    JhiMetricsEndpointsRequestsComponent,
    JhiMetricsCacheComponent,
    JhiMetricsDatasourceComponent,
    JhiMetricsSystemComponent,
    JhiMetricsGarbageCollectorComponent,
    JhiThreadModalComponent
} from 'component';

export const JHI_PIPES = [
    JhiCapitalizePipe,
    JhiFilterPipe,
    JhiKeysPipe,
    JhiOrderByPipe,
    JhiPureFilterPipe,
    JhiTruncateCharactersPipe,
    JhiTruncateWordsPipe
];

export const JHI_DIRECTIVES = [
    JhiMaxValidatorDirective,
    JhiMinValidatorDirective,
    JhiMaxbytesValidatorDirective,
    JhiMinbytesValidatorDirective,
    JhiSortDirective,
    JhiSortByDirective
];

export const JHI_COMPONENTS = [
    JhiItemCountComponent,
    JhiBooleanComponent,
    JhiJvmMemoryComponent,
    JhiJvmThreadsComponent,
    JhiMetricsHttpRequestComponent,
    JhiMetricsEndpointsRequestsComponent,
    JhiMetricsCacheComponent,
    JhiMetricsDatasourceComponent,
    JhiMetricsSystemComponent,
    JhiMetricsGarbageCollectorComponent,
    JhiThreadModalComponent
];
