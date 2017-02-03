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
import { ModuleConfig } from './config';
import { CONSTANTS } from './constants';
import {Injectable, Inject} from '@angular/core';

@Injectable()
export class ConfigHelper {
    CONFIG_OPTIONS: ModuleConfig;

    constructor(@Inject('configValue') configValue: ModuleConfig) {
        if (!configValue) {
            configValue = {};
        }
        this.setProperty(configValue, 'sortIcon');
        this.setProperty(configValue, 'sortAscIcon');
        this.setProperty(configValue, 'sortDescIcon');
        this.setProperty(configValue, 'sortIconSelector');
        this.setProperty(configValue, 'i18nEnabled');
        this.setProperty(configValue, 'defaultI18nLocation');
        this.setProperty(configValue, 'defaultI18nLang');
        this.setProperty(configValue, 'noi18nMessage');
        this.CONFIG_OPTIONS = configValue;
    }
    private setProperty(options, property) {
        options[property] = options[property] ? options[property] : CONSTANTS[property];
    }
    getConfig(): ModuleConfig {
        return this.CONFIG_OPTIONS;
    }
}
