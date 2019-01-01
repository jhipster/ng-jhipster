/*
 Copyright 2013-2019 the original author or authors from the JHipster project.

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
import { JhiModuleConfig } from '../src/config';

describe('ModuleConfig Test', () => {
  it('should have default values as specified', () => {
    const config = new JhiModuleConfig();

    expect(config.sortIcon).toBe('fa-sort');
    expect(config.sortAscIcon).toBe('fa-sort-up');
    expect(config.sortDescIcon).toBe('fa-sort-down');
    expect(config.sortIconSelector).toBe('span.fa');
    expect(config.i18nEnabled).toBe(false);
    expect(config.alertAsToast).toBe(false);
    expect(config.defaultI18nLang).toBe('en');
    expect(config.noi18nMessage).toBe('translation-not-found');
  });
});
