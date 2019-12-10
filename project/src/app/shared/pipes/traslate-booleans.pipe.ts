import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateBooleans'
})
export class TranslateBooleansPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case true: return 'Yes';
      case false: return 'No';
      default: return value;
    }
  }

}
