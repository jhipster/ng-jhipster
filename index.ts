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
import { NgModule, ModuleWithProviders, Sanitizer } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { JHI_PIPES, JHI_DIRECTIVES, JHI_COMPONENTS } from './src/jhi-components';
import {JhiThreadModalComponent} from './src/component/metrics';
import {
    JhiMissingTranslationHandler,
    JhiTranslateComponent,
    JhiLanguageService
} from './src/language';
import { JhiModuleConfig } from './src/config';
import { JhiConfigService } from './src/config.service';
import { JhiAlertService, JhiPaginationUtil, JhiResolvePagingParams } from './src/service';
import {FormsModule} from '@angular/forms';

// Re export the files
export * from './src/pipe';
export * from './src/directive';
export * from './src/service';
export * from './src/component';
export * from './src/language';
export * from './src/config.service';
export * from './src/config';

export function translatePartialLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'i18n/', `.json?buildTimestamp=${process.env.BUILD_TIMESTAMP}`);
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
        CommonModule,
        NgbModule.forRoot(),
        FormsModule,
    ],
    declarations: [
        ...JHI_PIPES,
        ...JHI_DIRECTIVES,
        ...JHI_COMPONENTS,
        JhiTranslateComponent
    ],
    entryComponents: [JhiThreadModalComponent],
    exports: [
        ...JHI_PIPES,
        ...JHI_DIRECTIVES,
        ...JHI_COMPONENTS,
        JhiTranslateComponent,
        TranslateModule,
        CommonModule
    ]
})
export class NgJhipsterModule {
    static forRoot(moduleConfig: JhiModuleConfig): ModuleWithProviders {
        return {
            ngModule: NgJhipsterModule,
            providers: [
                { provide: JhiLanguageService, useClass: JhiLanguageService, deps: [TranslateService, JhiConfigService] },
                { provide: JhiResolvePagingParams, useClass: JhiResolvePagingParams, deps: [JhiPaginationUtil] },
                { provide: JhiAlertService, useClass: JhiAlertService, deps: [Sanitizer, JhiConfigService, TranslateService] },
                { provide: JhiModuleConfig, useValue: moduleConfig },
                { provide: JhiConfigService, useClass: JhiConfigService, deps: [JhiModuleConfig] }
            ]
        };
    }
    static forChild(moduleConfig: JhiModuleConfig): ModuleWithProviders {
        return {
            ngModule: NgJhipsterModule,
            providers: [
                { provide: JhiModuleConfig, useValue: moduleConfig },
            ]
        };
    }
}
