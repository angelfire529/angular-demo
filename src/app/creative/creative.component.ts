import { Component, OnInit } from '@angular/core';
import { CampaignDataService } from '../services/campaign-data.service';
import { Creative } from '../models/creative';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-creative',
  providers: [CampaignDataService],
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.scss']
})
export class CreativeComponent implements OnInit {
  creative: Creative;
  creativeForm: FormGroup;
  constructor(private campaignDataService: CampaignDataService,
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService) {
    this.creativeForm = new FormGroup({
      name: new FormControl(),
      clicks: new FormControl(),
      impressions: new FormControl(),
      conversions: new FormControl(),
      views: new FormControl()
    });
  }

  ngOnInit() {
    if (!this.creative) {
      this.route.params.pipe(
        map(params => params['id']),
        tap(id => (id))
      ).subscribe(id => this.getCreative(id));
    }
  }

  onSubmit = () => {
    this.campaignDataService.deleteCreativeById(this.creative.id).subscribe((creatives) => {
      this.sharedService.updateCreatives(creatives);
      this.router.navigate(['/dashboard']);
    });
  }

  private getCreative(id) {
    const Id = Number.parseInt(id);
    this.campaignDataService.getCreativeById(Id).subscribe((c) => this.setCreative(c));
  }

  private setCreative(creative: Creative) {
    if (creative) {
      this.creative = creative;
      this.setForm();
    }
  }

  private setForm() {
    this.creativeForm.setValue({
      name: this.creative.name,
      clicks: this.creative.clicks,
      conversions: this.creative.conversions,
      impressions: this.creative.impressions,
      views: this.creative.views
    });
  }

}
