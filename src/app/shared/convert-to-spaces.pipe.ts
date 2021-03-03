import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces', // name to use when referencing the pipe in HTML
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, char: string): string {
    return value.replace(char, ' ');
  }
}
