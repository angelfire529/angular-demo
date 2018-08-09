import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campaign } from './models/campaign.class';
import { Observable, from, of } from '../../node_modules/rxjs';
import { Creative } from './models/creative';
import { CampaignCreatives } from './models/campaign-creatives';
import { map } from '../../node_modules/rxjs/operators';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {
  private campaignUrl = 'http://homework.ad-juster.com/api/campaigns';
  private creativeUrl = 'http://homework.ad-juster.com/api/creatives';

  constructor(private http: HttpClient, private sharedData: SharedService) { }
  getCampaignsAndCreatives(): Promise<CampaignCreatives> {
    const promise = Promise.all([
      this.http.get(this.campaignUrl).toPromise(),
      this.http.get(this.creativeUrl).toPromise()
    ]).then(([promise1, promise2]) => {
      return new CampaignCreatives(<Campaign[]>promise1, <Creative[]> promise2);
    });
    return promise;
  }

  getCreativeById(id): Observable<Creative> {
    const creative = this.sharedData.data.creatives.find(c => c.id === id);
    return of(creative);
  }

  deleteCreativeById(id): Observable<Creative[]> {
    const creatives = this.sharedData.data.creatives.filter(c => c.id !== id);
    return of(creatives);
  }

  deleteCampaignById(id): Observable<Campaign[]> {
    const campaigns = this.sharedData.data.campaigns.filter(c => c.id !== id);
    return of(campaigns);
  }
}
