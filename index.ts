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
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, MissingTranslationHandler, TranslateLoader } from 'ng2-translate/ng2-translate';

import { JhiMissingTranslationHandler } from './src/language/jhi-missing-translation.config';

import { TruncateCharactersPipe } from './src/pipe/truncate-characters.pipe';
import { TruncateWordsPipe } from './src/pipe/truncate-words.pipe';
import { OrderByPipe } from './src/pipe/order-by.pipe';
import { FilterPipe } from './src/pipe/filter.pipe';
import { CapitalizePipe } from './src/pipe/capitalize.pipe';
import { KeysPipe } from './src/pipe/keys.pipe';

import { JhiTranslateComponent } from './src/language/jhi-translate.directive';
import { JhiItemCountComponent } from './src/component/jhi-item-count.component';
import { MaxbytesValidatorDirective } from './src/directive/maxbytes.directive';
import { MinbytesValidatorDirective } from './src/directive/minbytes.directive';
import { ShowValidationDirective } from './src/directive/show-validation.directive';

import { PaginationUtil } from './src/service/pagination-util.service';
import { ParseLinks } from './src/service/parse-links.service';
import { DataUtils } from './src/service/data-util.service';
import { DateUtils } from './src/service/date-util.service';
import { EventManager } from './src/service/event-manager.service';
import { JhiLanguageService } from './src/language/language.service';

import { ModuleConfig } from './src/config';
import { ConfigHelper } from './src/helper';
import { TranslatePartialLoader } from './src/language/translate-partial-loader';

// Re export the files
export * from './src/pipe/truncate-characters.pipe';
export * from './src/pipe/truncate-words.pipe';
export * from './src/pipe/order-by.pipe';
export * from './src/pipe/filter.pipe';
export * from './src/pipe/capitalize.pipe';
export * from './src/pipe/keys.pipe';
export * from './src/language/jhi-translate.directive';
export * from './src/component/jhi-item-count.component';
export * from './src/directive/maxbytes.directive';
export * from './src/directive/minbytes.directive';
export * from './src/directive/show-validation.directive';
export * from './src/service/pagination-util.service';
export * from './src/service/parse-links.service';
export * from './src/service/data-util.service';
export * from './src/service/date-util.service';
export * from './src/service/event-manager.service';
export * from './src/language/translate-partial-loader';
export * from './src/language/language.service';

export function translatePartialLoader(http: Http) {
    return new TranslatePartialLoader(http, 'i18n', '.json');
}

export function missingTranslationHandler() {
    return new JhiMissingTranslationHandler();
}

@NgModule({
    imports: [
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: translatePartialLoader,
            deps: [Http]
        }),
        HttpModule,
        CommonModule
    ],
    declarations: [
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        CapitalizePipe,
        KeysPipe,
        JhiTranslateComponent,
        JhiItemCountComponent,
        MaxbytesValidatorDirective,
        MinbytesValidatorDirective,
        ShowValidationDirective
    ],
    providers: [
        {
            provide: MissingTranslationHandler, useFactory: missingTranslationHandler
        }
    ],
    exports: [
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        CapitalizePipe,
        KeysPipe,
        JhiTranslateComponent,
        JhiItemCountComponent,
        MaxbytesValidatorDirective,
        MinbytesValidatorDirective,
        ShowValidationDirective,
        TranslateModule,
        HttpModule,
        CommonModule
    ]
})
export class NgJhipsterModule {
    static forRoot(providedConfig: ModuleConfig): ModuleWithProviders {
        ConfigHelper.setModuleConfigOptions(providedConfig);
        return {
            ngModule: NgJhipsterModule,
            providers: [
                PaginationUtil,
                ParseLinks,
                DataUtils,
                DateUtils,
                EventManager,
                JhiLanguageService
            ]
        };
    }
}

