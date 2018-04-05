import { Injectable } from '@angular/core';
import { Campaign } from './models/campaign.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class CampaignsService {
  campaigns: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.campaigns = database.list('campaigns');
  }

  getCampaigns() {
    return this.campaigns;
  }

  addCampaign(newCampaign: Campaign) {
    this.campaigns.push(newCampaign);
  }

  getCampaignId(campaignId: number) {
    return this.database.object('campaigns/' + campaignId);
  }

}
