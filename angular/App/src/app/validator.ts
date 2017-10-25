
import { AbstractControl, ValidationErrors } from '@angular/forms'



export class Validator {
    static check(control: AbstractControl ):ValidationErrors|null {
        if((control.value as string).indexOf("@mum") == -1){
            return {mum:true}
        }else{
            return null;
        }
    }

    static checkName(control: AbstractControl) :ValidationErrors | null {
        if (!(control.value as string).match(/^[a-zA-Z]+$/) ) {
            return {notAlphabet: true}
        }

        return null;
    }


}