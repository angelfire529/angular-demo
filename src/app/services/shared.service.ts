import { Injectable } from "@angular/core";
import { CampaignCreatives } from "../models/campaign-creatives";
import { Campaign } from "../models/campaign.class";
import { Creative } from "../models/creative";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private _data: CampaignCreatives;

    get data(): CampaignCreatives {
        return this._data;
    }

    set data(src: CampaignCreatives) {
        if (!this._data) {
            this._data = new CampaignCreatives(src.campaigns, src.creatives);
        }
        this._data = src;
    }

    updateCreatives(creatives: Creative[]) {
        this.data.creatives = creatives;
    }

    updateCampaigns(campaigns: Campaign[]) {
        this.data.campaigns = campaigns;
    }

    constructor() { }

}
