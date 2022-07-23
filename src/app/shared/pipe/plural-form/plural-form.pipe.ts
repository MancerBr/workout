import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralForm',
})
export class PluralFormPipe implements PipeTransform {
  transform(value: string, count: number): string {
    console.log('count', count)
    return count > 1 ? `${value}.PLURAL` : `${value}.SINGULAR`;
  }
}
