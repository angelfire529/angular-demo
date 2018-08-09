import { Pipe, PipeTransform } from '@angular/core';
import { Creative } from '../models/creative';
import { Observable, from, of } from 'rxjs';

@Pipe({
  name: 'creativesByCampaign'
})
export class CreativesByCampaignPipe implements PipeTransform {

  transform(value: Creative[], id: number): Creative[] {
    return value.filter(c => c.parentId === id);
  }
}
