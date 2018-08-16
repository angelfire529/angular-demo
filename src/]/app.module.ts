import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreativeComponent } from './creative/creative.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CampaignDataService } from './services/campaign-data.service';
import { CampaignComponent } from './campaign/campaign.component';
import { CreativesByCampaignPipe } from './shared/creatives-by-campaign.pipe';
import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [
    CreativeComponent,
    DashboardComponent,
    HomeComponent,
    AppComponent,
    CampaignComponent,
    CreativesByCampaignPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  providers: [CampaignDataService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
 }
