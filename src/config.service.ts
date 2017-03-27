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
import { ModuleConfig } from './config';

@Injectable()
export class ConfigService {
    CONFIG_OPTIONS: ModuleConfig;

    constructor(moduleConfig?: ModuleConfig) {
        this.CONFIG_OPTIONS = new ModuleConfig();
        this.setProperty('sortIcon', moduleConfig);
        this.setProperty('sortAscIcon', moduleConfig);
        this.setProperty('sortDescIcon', moduleConfig);
        this.setProperty('sortIconSelector', moduleConfig);
        this.setProperty('i18nEnabled', moduleConfig);
        this.setProperty('defaultI18nLocation', moduleConfig);
        this.setProperty('defaultI18nLang', moduleConfig);
        this.setProperty('noi18nMessage', moduleConfig);
    }

    getConfig(): ModuleConfig {
        return this.CONFIG_OPTIONS;
    }

    private setProperty(property, moduleConfig) {
        this.CONFIG_OPTIONS[property] = (moduleConfig && moduleConfig[property]) ? moduleConfig[property] : this.CONFIG_OPTIONS[property];
    }

}
