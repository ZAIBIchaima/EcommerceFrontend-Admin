import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filterFacture'
})

@Injectable()
export class filterFacture implements PipeTransform {
    transform(items: any[], value1: string) {
        if (items && items.length) {
            return items.filter(item => {
                if ((value1 && item.nom_societe.indexOf(value1) === -1)) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    }
}
