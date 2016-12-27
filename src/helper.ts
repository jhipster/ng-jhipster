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
