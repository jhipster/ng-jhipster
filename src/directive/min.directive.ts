/*
 Copyright 2013-Present the original author or authors from the JHipster project.

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
import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import { forwardRef } from '@angular/core';

@Directive({
    selector: '[jhiMin][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => JhiMinValidatorDirective), multi: true }
    ]
})
export class JhiMinValidatorDirective {
    @Input() jhiMin: number;

    constructor() {}

    validate(c: FormControl) {
        return (c.value === undefined || c.value === null || c.value >= this.jhiMin) ? null : {
            min: {
                valid: false
            }
        };
    }
}
