
import { AbstractControl, ValidationErrors } from '@angular/forms'



export class Validator {
    static check(control: AbstractControl ):ValidationErrors|null {
        if((control.value as string) == '11'){
            return {unique:true}
        }else{
            return null;
        }
    }

}