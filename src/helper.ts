import { ModuleConfig } from './config';

let CONFIG_OPTIONS: ModuleConfig;

export class ConfigHelper {
    static setModuleConfigOptions(options: ModuleConfig) {
        CONFIG_OPTIONS = options;
    }

    static getConfig(): ModuleConfig {
        return CONFIG_OPTIONS;
    }
}