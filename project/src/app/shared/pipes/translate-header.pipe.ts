import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateHeader'
})
export class TranslateHeaderPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    switch (value) {
      case 'name': return 'nombre';
      case 'percent': return 'porcentaje';
      case 'code': return 'código';
      case 'businessName': return 'razón social';
      case 'cellphone': return 'celular';
      case 'username': return 'usuario';
      case 'isNotLocked': return 'usuario habilitado';
      default: return value;
    }
  }

}
