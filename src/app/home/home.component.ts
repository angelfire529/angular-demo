import { Component, OnInit } from '@angular/core';
import { CampaignDataService } from '../services/campaign-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private campaingDataService: CampaignDataService) { }

  ngOnInit() {
  }

}
