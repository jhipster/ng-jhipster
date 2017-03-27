import { ConfigService } from '../src/config.service';
import { ModuleConfig } from '../src/config';

describe('ConfigService Test', () => {
  it('should have default values as specified in ModuleConfig when initiated', () => {
    const defaultConfig = new ModuleConfig();
    const configService = new ConfigService();
    expect(defaultConfig.defaultI18nLang).toBe(configService.getConfig().defaultI18nLang);
    expect(defaultConfig.i18nEnabled).toBe(configService.getConfig().i18nEnabled);
    expect(defaultConfig.sortAscIcon).toBe(configService.getConfig().sortAscIcon);
  });

  it('should not have default values as specified in ModuleConfig when initiated', () => {
    const defaultConfig = new ModuleConfig();
    const configService = new ConfigService({defaultI18nLang: 'fr', i18nEnabled: true});
    expect(defaultConfig.defaultI18nLang).not.toBe(configService.getConfig().defaultI18nLang);
    expect(defaultConfig.i18nEnabled).not.toBe(configService.getConfig().i18nEnabled);
    expect(defaultConfig.sortAscIcon).toBe(configService.getConfig().sortAscIcon);
    expect(configService.getConfig().defaultI18nLang).toBe('fr');
  });
});
