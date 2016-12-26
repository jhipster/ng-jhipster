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
import { SORT_ICONS, I18N } from './src/constants';
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


@NgModule({
    imports: [
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslatePartialLoader(http, 'i18n', '.json'),
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
            provide: MissingTranslationHandler, useFactory: () => new JhiMissingTranslationHandler()
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
    static forRoot(providedConfig: ModuleConfig = {
        sortIcon : SORT_ICONS.icon,
        sortAscIcon : SORT_ICONS.ascIcon,
        sortDescIcon : SORT_ICONS.descIcon,
        sortIconSelector : SORT_ICONS.iconSelector,
        defaultI18nLocation: I18N.defaultLocation,
        defaultI18nLang: I18N.defaultLanguage
    }): ModuleWithProviders {
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

