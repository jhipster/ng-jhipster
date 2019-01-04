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
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Sanitizer } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
    MissingTranslationHandler,
    TranslateLoader,
    TranslateModule,
    TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JhiThreadModalComponent } from './component/metrics/jhi-metrics-modal-threads.component';
import { JhiModuleConfig } from './config';
import { JhiConfigService } from './config.service';
import { JHI_COMPONENTS, JHI_DIRECTIVES, JHI_PIPES } from './jhi-components';
import { JhiMissingTranslationHandler } from './language/jhi-missing-translation.config';
import { JhiTranslateComponent } from './language/jhi-translate.directive';
import { JhiLanguageService } from './language/language.service';
import { JhiAlertService } from './service/alert.service';
import { JhiPaginationUtil } from './service/pagination-util.service';
import { JhiResolvePagingParams } from './service/resolve-paging-params.service';

export function translatePartialLoader(http: HttpClient) {
    return new TranslateHttpLoader(
        http,
        'i18n/',
        `.json?buildTimestamp=${process.env.BUILD_TIMESTAMP}`
    );
}

export function missingTranslationHandler(configService: JhiConfigService) {
    return new JhiMissingTranslationHandler(configService);
}

@NgModule({
    imports: [
        CommonModule,
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
        FormsModule
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
                {
                    provide: JhiLanguageService,
                    useClass: JhiLanguageService,
                    deps: [TranslateService, JhiConfigService]
                },
                {
                    provide: JhiResolvePagingParams,
                    useClass: JhiResolvePagingParams,
                    deps: [JhiPaginationUtil]
                },
                {
                    provide: JhiAlertService,
                    useClass: JhiAlertService,
                    deps: [Sanitizer, JhiConfigService, TranslateService]
                },
                { provide: JhiModuleConfig, useValue: moduleConfig },
                {
                    provide: JhiConfigService,
                    useClass: JhiConfigService,
                    deps: [JhiModuleConfig]
                }
            ]
        };
    }
    static forChild(moduleConfig: JhiModuleConfig): ModuleWithProviders {
        return {
            ngModule: NgJhipsterModule,
            providers: [{ provide: JhiModuleConfig, useValue: moduleConfig }]
        };
    }
}
