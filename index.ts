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
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { JHI_PIPES, JHI_DIRECTIVES, JHI_COMPONENTS, JHI_SERVICES } from './src/jhi-components';
import {
    JhiMissingTranslationHandler,
    JhiTranslateComponent,
    JhiLanguageService
} from './src/language';
import { JhiModuleConfig } from './src/config';
import { JhiConfigService } from './src/config.service';

// Re export the files
export * from './src/pipe';
export * from './src/directive';
export * from './src/service';
export * from './src/component';
export * from './src/language';
export * from './src/interceptor';

export function translatePartialLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'i18n/', '.json');
}

export function missingTranslationHandler(configService: JhiConfigService) {
    return new JhiMissingTranslationHandler(configService);
}

@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translatePartialLoader,
                deps: [HttpClient]
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useFactory: missingTranslationHandler,
                deps: [JhiConfigService]
            }
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
    static forRoot(moduleConfig: JhiModuleConfig): ModuleWithProviders {
        return {
            ngModule: NgJhipsterModule,
            providers: [
                ...JHI_SERVICES,
                JhiLanguageService,
                { provide: JhiModuleConfig, useValue: moduleConfig },
                JhiConfigService
            ]
        };
    }
}
