import { ModuleConfig } from '../src/config';

describe('ModuleConfig Test', () => {
  it('should have default values as specified', () => {
    const config = new ModuleConfig();

    expect(config.sortIcon).toBe('fa-sort');
    expect(config.sortAscIcon).toBe('fa-sort-asc');
    expect(config.sortDescIcon).toBe('fa-sort-desc');
    expect(config.sortIconSelector).toBe('span.fa');
    expect(config.i18nEnabled).toBe(false);
    expect(config.defaultI18nLocation).toBe('global');
    expect(config.defaultI18nLang).toBe('en');
    expect(config.noi18nMessage).toBe('translation-not-found');
  });
});
