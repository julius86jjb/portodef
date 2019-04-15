import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPortofolio'
})
export class FilterPortofolioPipe implements PipeTransform {

  transform(items: any[], criteria: any): any {
    if ( criteria === 'all' ) {
        return items;
    } else {
        return items.filter( item => {
            return item.tipo === criteria;
        });
    }
  }

}
