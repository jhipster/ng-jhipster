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

import { JHI_PIPES, JHI_DIRECTIVES, JHI_COMPONENTS, JHI_SERVICES } from './src/jhi-components';

import {
    JhiMissingTranslationHandler,
    TranslatePartialLoader,
    JhiTranslateComponent,
    JhiLanguageService
} from './src/language';

import { ModuleConfig } from './src/config';
import { ConfigHelper } from './src/helper';

// Re export the files
export * from './src/pipe';
export * from './src/directive';
export * from './src/service';
export * from './src/component';
export * from './src/language';
export * from './src/interceptor';

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
        ...JHI_PIPES,
        ...JHI_DIRECTIVES,
        ...JHI_COMPONENTS,
        JhiTranslateComponent
    ],
    providers: [
        {
            provide: MissingTranslationHandler, useFactory: missingTranslationHandler
        }
    ],
    exports: [
        ...JHI_PIPES,
        ...JHI_DIRECTIVES,
        ...JHI_COMPONENTS,
        JhiTranslateComponent,
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
                ...JHI_SERVICES,
                JhiLanguageService
            ]
        };
    }
}

