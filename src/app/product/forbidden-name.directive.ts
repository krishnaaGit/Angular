import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';


@Directive({
    selector: '[forbiddenName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective implements Validator {
    @Input() forbiddenName: string;

    validate(control: AbstractControl): { [key: string]: any } {
        return this.forbiddenName ? forbiddenNameValidator(this.forbiddenName)(control): null; 
        //return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control): null;
    }
}
// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: any } => {
//         //const forbidden = nameRe.test(control.value);
//         return forbidden ? { 'forbiddenName': { value: control.value } } : null;
//     };
// }

export function forbiddenNameValidator(name: String): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        //const forbidden = nameRe.test(control.value);
        const forbidden = name.trim() == (control.value.trim());
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}