import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, MissingTranslationHandler } from 'ng2-translate';

import { createTranslatePartialLoader } from './src/language/translate-partial-loader.provider';
import { JhiMissingTranslationHandler } from './src/language/jhi-missing-translation.config';

import { TruncateCharactersPipe } from './src/pipe/truncate-characters.pipe';
import { TruncateWordsPipe } from './src/pipe/truncate-words.pipe';
import { OrderByPipe } from './src/pipe/order-by.pipe';
import { FilterPipe } from './src/pipe/filter.pipe';
import { CapitalizePipe } from './src/pipe/capitalize.pipe';
import { KeysPipe } from './src/pipe/keys.pipe';

import { JhiTranslate } from './src/language/jhi-translate.directive';
import { JhiItemCountComponent } from './src/component/jhi-item-count.component';
import { MaxbytesValidator } from './src/directive/maxbytes.directive';
import { MinbytesValidator } from './src/directive/minbytes.directive';
import { ShowValidationDirective } from './src/directive/show-validation.directive';

import { PaginationUtil } from './src/service/pagination-util.service';
import { ParseLinks } from './src/service/parse-links.service';
import { DataUtils } from './src/service/data-util.service';
import { DateUtils } from './src/service/date-util.service';
import { EventManager } from './src/service/event-manager.service';

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


@NgModule({
    imports: [
        TranslateModule.forRoot(createTranslatePartialLoader()),
    ],
    declarations: [
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        CapitalizePipe,
        KeysPipe,
        JhiTranslate,
        JhiItemCountComponent,
        MaxbytesValidator,
        MinbytesValidator,
        ShowValidationDirective
    ],
    providers: [
        { provide: MissingTranslationHandler, useClass: JhiMissingTranslationHandler },
        PaginationUtil,
        ParseLinks,
        DataUtils,
        DateUtils,
        EventManager
    ],
    exports: [
        TruncateCharactersPipe,
        TruncateWordsPipe,
        OrderByPipe,
        FilterPipe,
        CapitalizePipe,
        KeysPipe,
        JhiTranslate,
        JhiItemCountComponent,
        MaxbytesValidator,
        MinbytesValidator,
        ShowValidationDirective,
        HttpModule,
        CommonModule,
        TranslateModule,
    ]
})
export class NgJhipsterModule {}

