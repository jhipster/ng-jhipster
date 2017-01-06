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
import { CapitalizePipe, FilterPipe, KeysPipe, OrderByPipe, PureFilterPipe, TruncateCharactersPipe, TruncateWordsPipe} from './pipe';
import { MaxbytesValidatorDirective, MinbytesValidatorDirective,
    ShowValidationDirective, JhiSortDirective, JhiSortByDirective } from './directive';
import { JhiItemCountComponent } from './component';
import { DataUtils, DateUtils, EventManager, ParseLinks, PaginationUtil} from './service';

export const JHI_PIPES = [
    CapitalizePipe,
    FilterPipe,
    KeysPipe,
    OrderByPipe,
    PureFilterPipe,
    TruncateCharactersPipe,
    TruncateWordsPipe
];

export const JHI_DIRECTIVES = [
    MaxbytesValidatorDirective,
    MinbytesValidatorDirective,
    ShowValidationDirective,
    JhiSortDirective,
    JhiSortByDirective
];

export const JHI_COMPONENTS = [
    JhiItemCountComponent
];

export const JHI_SERVICES = [
    DataUtils,
    DateUtils,
    EventManager,
    ParseLinks,
    PaginationUtil
];
