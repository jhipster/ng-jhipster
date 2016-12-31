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
import * as JhiPipes from './pipe';
import * as JhiDirectives from './directive';
import * as JhiComponents from './component';
import * as JhiServices from './service';

export const JHI_PIPES = [
    JhiPipes.CapitalizePipe,
    JhiPipes.FilterPipe,
    JhiPipes.KeysPipe,
    JhiPipes.OrderByPipe,
    JhiPipes.TruncateCharactersPipe,
    JhiPipes.TruncateWordsPipe
];

export const JHI_DIRECTIVES = [
    JhiDirectives.MaxbytesValidatorDirective,
    JhiDirectives.MinbytesValidatorDirective,
    JhiDirectives.ShowValidationDirective,
    JhiDirectives.JhiSortDirective,
    JhiDirectives.JhiSortByDirective
];

export const JHI_COMPONENTS = [
    JhiComponents.JhiItemCountComponent
];

export const JHI_SERVICES = [
    JhiServices.DataUtils,
    JhiServices.DateUtils,
    JhiServices.EventManager,
    JhiServices.ParseLinks,
    JhiServices.PaginationUtil
];
