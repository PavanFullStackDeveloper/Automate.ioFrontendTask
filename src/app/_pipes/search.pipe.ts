// Angular imports
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(items: any, searchQuery: string, searchBy: any): any {
        if (!items) return [];
        if (!searchQuery) return items;

        return items.filter((item: any) => {
            if (searchBy) {
                for (let index in searchBy) {
                    if (item[searchBy[index]] === null) {
                        continue;
                    }
                    if (item[searchBy[index]].toString().toLowerCase().includes(searchQuery.toLowerCase())) {
                        return true;
                    }
                }
            } else {
                for (let property in item) {
                    if (item[property] === null) {
                        continue;
                    }
                    if (item[property].toString().toLowerCase().includes(searchQuery.toLowerCase())) {
                        return true;
                    }
                }
            }
            return false;
        });
    }
}
