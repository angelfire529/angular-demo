import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'node_modules/ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatPaginatorModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreativeComponent } from './creative/creative.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CampaignDataService } from './campaign-data.service';
import { CampaignComponent } from './campaign/campaign.component';
import { CreativesByCampaignPipe } from './shared/creatives-by-campaign.pipe';
import { SharedService } from './shared.service';


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
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatPaginatorModule,
  ],
  providers: [CampaignDataService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
 }
