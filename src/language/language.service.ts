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
import { Injectable } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';

import { TranslatePartialLoader } from './translate-partial-loader';
import { ConfigHelper } from '../helper';

@Injectable()
export class JhiLanguageService {

    defaultLocation = 'global';
    currentLang = 'en';
    locations: string[] = [];

    constructor (private translateService: TranslateService) {
        this.init();
    }

    init () {
        let config = ConfigHelper.getConfig();
        this.defaultLocation = config.defaultI18nLocation;
        this.currentLang = config.defaultI18nLang;
        this.translateService.setDefaultLang(this.currentLang);
        this.translateService.currentLang = this.currentLang;
    }

    changeLanguage(languageKey: string) {
        this.currentLang = languageKey;
        this.reload();
    }

    setLocations(locations: string[]) {
        this.locations = locations;
        this.locations.push(this.defaultLocation);
        this.reload();
    }

    addLocation(location: string) {
        if (this.locations.indexOf(location) === -1) {
            this.locations.push(location);
            this.reload();
        }
    }

    reload() {
        this.translateService.setDefaultLang(this.currentLang);
        let translatePartialLoader: TranslatePartialLoader = <TranslatePartialLoader> this.translateService.currentLoader;
        translatePartialLoader.setLocations(this.locations);
        // reset the language cache //FIXME not ideal as this increases the http requests
        this.translateService.resetLang(this.currentLang);
        this.translateService.use(this.currentLang);
    }

    getCurrent(): Promise<any> {
        return Promise.resolve(this.currentLang);
    }
}
