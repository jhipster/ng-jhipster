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
import { JhiConfigService } from '../src/config.service';
import { JhiModuleConfig } from '../src/config';

describe('ConfigService Test', () => {
  it('should have default values as specified in ModuleConfig when initiated', () => {
    const defaultConfig = new JhiModuleConfig();
    const configService = new JhiConfigService();
    expect(defaultConfig.defaultI18nLang).toBe(configService.getConfig().defaultI18nLang);
    expect(defaultConfig.i18nEnabled).toBe(configService.getConfig().i18nEnabled);
    expect(defaultConfig.sortAscIcon).toBe(configService.getConfig().sortAscIcon);
  });

  it('should not have default values as specified in ModuleConfig when initiated', () => {
    const defaultConfig = new JhiModuleConfig();
    const configService = new JhiConfigService({defaultI18nLang: 'fr', i18nEnabled: true});
    expect(defaultConfig.defaultI18nLang).not.toBe(configService.getConfig().defaultI18nLang);
    expect(defaultConfig.i18nEnabled).not.toBe(configService.getConfig().i18nEnabled);
    expect(defaultConfig.sortAscIcon).toBe(configService.getConfig().sortAscIcon);
    expect(configService.getConfig().defaultI18nLang).toBe('fr');
  });
});
