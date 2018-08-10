import { Component, OnInit, Input } from '@angular/core';
import { CampaignDataService } from '../services/campaign-data.service';
import { Campaign } from '../models/campaign.class';
import { Creative } from '../models/creative';
import { SharedService } from '../services/shared.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  campaigns: Campaign[];
  filteredCampaigns: Campaign[];
  creatives: Creative[];
  private pageSize = 10;
  private currentPage = 0;
  @Input() length: number;

  constructor(private campaignDataService: CampaignDataService, private sharedService: SharedService) { }

  ngOnInit() {
    if (this.sharedService.data.campaigns.length === 0 && this.sharedService.data.creatives.length === 0) {
      this.campaignDataService.getCampaignsAndCreatives().then(
        data => {
          this.campaigns = data.campaigns;
          this.filteredCampaigns = this.getPagedItems(this.pageSize, this.currentPage);
          this.creatives = data.creatives;
          this.length = this.campaigns.length;
          this.sharedService.updateData(this.campaigns, this.creatives);
        }
      );
    } else {
      this.campaigns = this.sharedService.data.campaigns;
      this.filteredCampaigns = this.getPagedItems(this.pageSize, this.currentPage);
      this.creatives = this.sharedService.data.creatives;
      this.length = this.campaigns.length;
    }
  }

  onRemoved(e) {
    this.length = e.campaigns.length;
    this.campaigns = e.campaigns;
    this.filteredCampaigns = this.getPagedItems(this.pageSize, this.currentPage);
  }

  handlePageEvent(e) {
    this.pageSize = e.pageSize;
    this.currentPage = e.pageIndex;
    this.filteredCampaigns = this.getPagedItems(e.pageSize, e.pageIndex);
  }

  getPagedItems(pageSize: number, current: number): Campaign[] {
    const next = pageSize * (current + 1) > this.campaigns.length - 1 ? this.campaigns.length - 1 : pageSize * (current + 1);
    const items = _.slice(this.campaigns, pageSize * current, next + 1);
    return items;
  }
}
