import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false // el pipe debe estar pendiente del ciclo de cambios de angular
  // ( en este caso para eliminar un heroe y que la fila desaparezca de la tabla)
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    const keys = [];

    // tslint:disable-next-line:forin
    for (const key in value) {
        keys.push(key);
    }
    return keys;
  }

}
