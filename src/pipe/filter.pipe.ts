/*
 Copyright 2013-2019 the original author or authors from the JHipster project.

 This file is part of the JHipster project, see https://www.jhipster.tech/
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
    transform(input: any[], filter: any, field?: string): any {
        if (!filter) {
            return input;
        }

        // if filter is of type 'function' compute current value of filter, otherwise return filter
        const currentFilter = typeof filter === 'function' ? filter() : filter;

        switch (typeof currentFilter) {
            case 'number':
                return input.filter(this.filterByNumber(currentFilter, field));
            case 'boolean':
                return input.filter(this.filterByBoolean(currentFilter, field));
            case 'string':
                return input.filter(this.filterByString(currentFilter, field));
            case 'object':
                // filter by object ignores 'field' if specified
                return input.filter(this.filterByObject(currentFilter));
            default:
                // 'symbol' && 'undefined'
                return input.filter(this.filterDefault(currentFilter, field));
        }
    }

    private filterByNumber(filter, field?) {
        return value =>
            (value && !filter) || (typeof value === 'object' && field)
                ? value[field] && typeof value[field] === 'number' && value[field] === filter
                : typeof value === 'number' && value === filter;
    }

    private filterByBoolean(filter, field?) {
        return value =>
            (value && !filter) || (typeof value === 'object' && field)
                ? value[field] && (typeof value[field] === 'boolean' && value[field] === filter)
                : typeof value === 'boolean' && value === filter;
    }

    private filterByString(filter, field?) {
        return value =>
            (value && !filter) || (typeof value === 'object' && field)
                ? value[field] && typeof value[field] === 'string' && value[field] === filter
                : typeof value === 'string' && value.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    }

    private filterDefault(filter, field?) {
        return value => ((value && !filter) || (typeof value === 'object' && field) ? value[field] && filter === value : filter === value);
    }

    private filterByObject(filter) {
        return value => {
            const keys = Object.keys(filter);
            let isMatching = false;

            // all fields defined in filter object must match
            for (const key of keys) {
                switch (typeof filter[key]) {
                    case 'number':
                        isMatching = this.filterByNumber(filter[key])(value[key]);
                        break;
                    case 'boolean':
                        isMatching = this.filterByBoolean(filter[key])(value[key]);
                        break;
                    case 'string':
                        isMatching = this.filterByString(filter[key])(value[key]);
                        break;
                    default:
                        isMatching = this.filterDefault(filter[key])(value[key]);
                }
            }
            return isMatching;
        };
    }
}
