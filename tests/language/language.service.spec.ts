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
import { TestBed, inject } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { JhiLanguageService } from '../../src/language/language.service';
import { ConfigService } from '../../src/config.service';

class TranslateLoaderMock {
    public setLocations(locaions: string[]) { }
}

class TranslateServiceMock {
    private lang: string;
    private currentLoader: TranslateLoaderMock;

    constructor() {
        this.currentLoader = new TranslateLoaderMock();
    }

    public getTranslation(): string {
        return this.lang;
    }

    public setDefaultLang(lang: string) { }

    public resetLang(lang: string) { }

    public use(lang: string): Observable<any> {
        return Observable.of();
    }
}

describe('LanguageService Test', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                JhiLanguageService,
                {
                    provide: TranslateService,
                    useClass: TranslateServiceMock
                },
                {
                    provide: ConfigService,
                    useValue: new ConfigService({})
                }

            ]
        });
    });

    it('should change Language', inject([JhiLanguageService], (service: JhiLanguageService) => {
        service.changeLanguage('fr');
        expect(service.getCurrent()).toEqual(Promise.resolve('fr'));
    }));

    it('should retain changed language even after force refresh', inject([JhiLanguageService], (service: JhiLanguageService) => {
        service.changeLanguage('fr');
        service.init();
        expect(service.getCurrent()).toEqual(Promise.resolve('fr'));
    }));

});
