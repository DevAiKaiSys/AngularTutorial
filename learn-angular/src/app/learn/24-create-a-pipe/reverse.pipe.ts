import { Pipe, PipeTransform } from '@angular/core';

// starting
// completed
@Pipe({
  name: 'reverse',
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  // starting
  /* transform(value: string): string {
    return '';
  } */
  // completed
  transform(value: string): string {
    let reverse = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }

    return reverse;
  }
}
