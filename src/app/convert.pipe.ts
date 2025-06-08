import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {

    if (!value) {
      return '';
    }
    console.log(targetUnits);

    switch (targetUnits) {
     case 'km':
      return value * 1.60934; // Convert miles to kilometers
    case 'm':
      return value * 1609.34; // Convert miles to meters
    default:
      return value; // If no valid target unit is provided, return the original value
    }
    
    return value * 1.60934; // Convert miles to kilometers
  }

}
