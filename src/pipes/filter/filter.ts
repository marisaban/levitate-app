import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                if (el.name){
                  return el.name.toString().toLowerCase().indexOf(input) > -1;
                }
                else {
                  return el.toString().toLowerCase().indexOf(input) > -1;
                }
            })
        }
        return value;
    }
}
