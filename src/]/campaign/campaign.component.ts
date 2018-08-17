import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Campaign } from '../models/campaign.class';
import { Creative } from '../models/creative';
import { CampaignDataService } from '../services/campaign-data.service';
import { Router } from '../../../node_modules/@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  private firstHalf: Campaign[];
  private secondHalf: Campaign[];
  private _filteredArray: Campaign[];

  @Input() set filteredArray(campaigns: Campaign[]) {
    this.splitArrays(campaigns);
    this._filteredArray = campaigns;
  }
  @Input() creatives: Creative[];

  @Output() removed = new EventEmitter<any>();

  constructor(private sharedService: SharedService, private campaignDataService: CampaignDataService, private router: Router) { }

  ngOnInit() {
  }

  private splitArrays(array: Campaign[]) {
    if (_.isUndefined(array)) { return; }
    const mid = Math.floor(array.length / 2);
    switch (array.length) {
      case 0:
      break;
      case 1:
        this.firstHalf = array;
      break;
      default:
      this.firstHalf = _.slice(array, 0, mid);
      this.secondHalf = _.slice(array, mid + 1);
      break;
    }
  }

  goToCreative = (id) => {
    this.router.navigate(['/creative', id]);
  }

  removeCampaign = (e, id) => {
     e.preventDefault();
    this.campaignDataService.deleteCampaignById(id).subscribe(campaigns => {
      this.filteredArray = campaigns;
      this.sharedService.updateCampaigns(campaigns);
      this.removed.emit({campaigns});
    });
  }
}
