import { Injectable } from "@angular/core";
import { CampaignCreatives } from "../models/campaign-creatives";
import { Campaign } from "../models/campaign.class";
import { Creative } from "../models/creative";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private _data: CampaignCreatives = new CampaignCreatives([], []);

    get data(): CampaignCreatives {
        return this._data;
    }

    set data(src: CampaignCreatives) {
        this._data = src;
    }

    updateData(campaigns: Campaign[], creatives: Creative[]) {
        this.data.campaigns = campaigns;
        this.data.creatives = creatives;
    }

    updateCreatives(creatives: Creative[]) {
        this.data.creatives = creatives;
    }

    updateCampaigns(campaigns: Campaign[]) {
        this.data.campaigns = campaigns;
    }

    constructor() { }

}
