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

@Pipe({ name: 'filter', pure: false })
export class JhiFilterPipe implements PipeTransform {

    private filterByStringAndField(filter, field) {
        return (value) => {
            return !filter || (value[field] && value[field].toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        };
    }

    // adapted from https://github.com/VadimDez/ng2-filter-pipe
    private filterByString(filter) {
        return (value) => {
            return !filter || value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        };
    }

    private filterDefault(filter) {
        return (value) => {
            return !filter || filter === value;
        };
    }

    private filterByObject(filter) {
        return (value) => {
            const keys = Object.keys(filter);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                const type = typeof value[key];
                let isMatching;

                if (type === 'string') {
                    isMatching = this.filterByString(filter[key])(value[key]);
                } else if (type === 'object') {
                    isMatching = this.filterByObject(filter[key])(value[key]);
                } else {
                    isMatching = this.filterDefault(filter[key])(value[key]);
                }

                if (!isMatching) {
                    return false;
                }
            }

            return true;
        };
    }

    transform(input: Array<any>, filter: string, field: string): any {
        if (!filter) {
            return input;
        }
        const type = typeof filter;
        if (type === 'string') {
            if (field) {
                return input.filter(this.filterByStringAndField(filter, field));
            }
            return input.filter(this.filterByString(filter));
        }

        if (type === 'object') {
            return input.filter(this.filterByObject(filter));
        }
    }
}
