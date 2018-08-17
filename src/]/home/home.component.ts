import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { CampaignCreatives } from '../models/campaign-creatives';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.data = new CampaignCreatives([], []);
    this.sharedService.initialized = false;
  }
}
