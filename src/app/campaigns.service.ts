import { Injectable } from '@angular/core';
import { Campaign } from './models/campaign.model';
import { CAMPAIGNS } from './mock-campaigns';

@Injectable()
export class CampaignsService {

  constructor() { }

  getCampaigns() {
    return CAMPAIGNS;
  }

  getCampaignId(campaignId: number) {
    for (var i = 0; i <= CAMPAIGNS.length - 1; i++) {
      if (CAMPAIGNS[i].id === campaignId) {
        return CAMPAIGNS[i];
      }
    }
  }

}
