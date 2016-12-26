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
