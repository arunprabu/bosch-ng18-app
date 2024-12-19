import { Pipe, PipeTransform } from '@angular/core';
// ng g p shared/pipes/ellipsis 

@Pipe({
  name: 'ellipsis',
  standalone: true
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    console.log(args[0]);
    value = value.substring(0, args[0]);
    return value + "...";
  }

}
