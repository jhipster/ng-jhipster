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
export function numberOfBytes(base64String: string) {
    return base64String.length / 4 * 3 - paddingSize(base64String);

    function endsWith(suffix: string, str: string) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    function paddingSize(value: string) {
        if (endsWith('==', value)) {
            return 2;
        }
        if (endsWith('=', value)) {
            return 1;
        }
        return 0;
    }
}
