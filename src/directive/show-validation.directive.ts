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
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: 'form[jhiShowValidation]' })
export class ShowValidationDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       let formElements = el.nativeElement.querySelectorAll('.form-group');
       Array.prototype.forEach.call(formElements, (formGroup: any) => {
           // TODO this needs to be properly tested
           let inputs = formGroup.querySelectorAll('input[(ngModel)],textarea[(ngModel)],select[(ngModel)]');

           if (inputs !== null) {
               Array.prototype.forEach.call(inputs, (input: any) => {
                   // TODO this logic needs to be checked and fixed accordingly
                   let isInvalid = input.classList.contains('ng-invalid') && input.classList.contains('ng-dirty');
                   formGroup.classList.toggle('has-error', isInvalid);
                   /*scope.$watch(function() {
                       return $input.hasClass('ng-invalid') && $input.hasClass('ng-dirty');
                   }, function(isInvalid) {
                       $formGroup.toggleClass('has-error', isInvalid);
                   });*/
               });
           }
       });
    }
}
