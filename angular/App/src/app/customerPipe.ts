import { Pipe, PipeTransform } from "@angular/core";
import { User } from './user';

@Pipe({
 name:'getFullName',
})

export class CustomerPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        return value+args;
    }
    

}