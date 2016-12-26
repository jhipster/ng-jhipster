import { Directive, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import { forwardRef } from '@angular/core';
import { numberOfBytes } from './number-of-bytes';

function validateMaxbytesFactory() {
    return (c: FormControl, maxbytes: number) => {
        return (c.value || numberOfBytes(c.value) <= maxbytes) ? null : {
            maxbytes: {
                valid: false
            }
        };
    };
}

@Directive({
    selector: '[jhi-maxbytes][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => MaxbytesValidatorDirective), multi: true }
    ]
})
export class MaxbytesValidatorDirective {
    @Input() maxbytes: number;
    validator: Function;

    constructor() {
        this.validator = validateMaxbytesFactory();
    }
    validate(c: FormControl) {
        return this.validator(c, this.maxbytes);
    }
}
