/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ selector: 'form[jhiShowValidation]' })
export class ShowValidationDirective implements AfterViewInit {

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        let formElements = this.el.nativeElement.querySelectorAll('.form-group');

        formElements.forEach((formGroup) =>  {
            let inputs = formGroup.querySelectorAll('input[ng-reflect-model],textarea[ng-reflect-model],select[ng-reflect-model]');

            if (inputs) {
                inputs.forEach((input) => {
                    let isInvalid = input.classList.contains('ng-invalid') && input.classList.contains('ng-dirty');
                    formGroup.classList.toggle('has-error', isInvalid);
                });
            }

        });
    }
}
