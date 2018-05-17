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
import { TestBed, inject, async } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { JhiLanguageService } from '../../src/language/language.service';
import { JhiConfigService } from '../../src/config.service';

describe('LanguageService Test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TranslateModule.forRoot()],
            providers: [
                {
                    provide: JhiConfigService,
                    useValue: new JhiConfigService({})
                }

            ]
        });
    });

    it('should change Language', async(inject([JhiLanguageService], (service: JhiLanguageService) => {
        service.changeLanguage('fr');
        service.getCurrent().then((language) => expect(language).toEqual('fr'));
    })));

    it('should retain changed language even after force refresh', async(inject([JhiLanguageService], (service: JhiLanguageService) => {
        service.changeLanguage('fr');
        service.init();
        service.getCurrent().then((language) => expect(language).toEqual('fr'));
    })));

});
