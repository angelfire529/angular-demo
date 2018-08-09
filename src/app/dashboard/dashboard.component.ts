import { Component, OnInit } from '@angular/core';
import { CampaignDataService } from '../campaign-data.service';
import { Campaign } from '../models/campaign.class';
import { Creative } from '../models/creative';
import { Router } from '../../../node_modules/@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  campaigns: Campaign[];
  creatives: Creative[];


  constructor(private campaignDataService: CampaignDataService, private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    if (this.sharedService.data.campaigns.length === 0 && this.sharedService.data.creatives.length === 0) {
      this.campaignDataService.getCampaignsAndCreatives().then(
        data => {
          this.campaigns = data.campaigns;
          this.creatives = data.creatives;
          this.sharedService.updateData(this.campaigns, this.creatives);
        }
      );
     } else {
       this.campaigns = this.sharedService.data.campaigns;
       this.creatives = this.sharedService.data.creatives;
     }
  }

  goToCreative = (id) => {
    this.router.navigate(['/creative', id]);
  }

  getMidPointStyle = (index) => {
    if (index === Math.floor(this.campaigns.length / 2) && this.campaigns.length % 2 !== 0) {
      return {'margin-bottom': '100px'};
    } else if (index === Math.floor(this.campaigns.length / 2) + 1 && this.campaigns.length % 2 !== 0) {
      return {'margin-top': '100px'};
    }
    return {'margin-top': '0', 'margin-bottom': '1rem'};
  }

  removeCampaign = (e, id) => {
    e.preventDefault();
    this.campaignDataService.deleteCampaignById(id).subscribe(campaigns => {
      this.campaigns = campaigns;
      this.sharedService.updateCampaigns(campaigns);
    });
  }
}
