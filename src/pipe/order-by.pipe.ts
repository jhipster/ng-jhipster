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
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class JhiOrderByPipe implements PipeTransform {
    transform(values: any[], predicate = '', reverse = false): any {
        if (predicate === '') {
            return reverse ? values.sort().reverse() : values.sort();
        }
        return values.sort((a, b) => {
            if (a[predicate] < b[predicate]) {
                return reverse ? 1 : -1;
            } else if (b[predicate] < a[predicate]) {
                return reverse ? -1 : 1;
            }
            return 0;
        });
    }
}
