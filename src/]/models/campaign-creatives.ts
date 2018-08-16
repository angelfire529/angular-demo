import { Campaign } from './campaign.class';
import { Creative } from './creative';


export class CampaignCreatives {
    constructor(public campaigns: Campaign[], public creatives: Creative[]) {}
}
