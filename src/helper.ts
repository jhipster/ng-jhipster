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

let CONFIG_OPTIONS: ModuleConfig;

export class ConfigHelper {
    static setModuleConfigOptions(options: ModuleConfig) {
        function setProperty(property) {
            options[property] = options[property] ? options[property] : CONSTANTS[property];
        }

        if (!options) {
            options = {};
        }
        setProperty('sortIcon');
        setProperty('sortAscIcon');
        setProperty('sortDescIcon');
        setProperty('sortIconSelector');
        setProperty('defaultI18nLocation');
        setProperty('defaultI18nLang');

        CONFIG_OPTIONS = options;
    }

    static getConfig(): ModuleConfig {
        return CONFIG_OPTIONS;
    }
}
