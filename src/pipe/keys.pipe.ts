import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let keys = [];
    for (let i = 0, valueKeys = Object.keys(value); i < keys.length; i++) {
      let key = valueKeys[i];
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
