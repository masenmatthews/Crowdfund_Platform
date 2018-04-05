import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Campaign } from '../models/campaign.model';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css'],
  providers: [CampaignsService]
})

export class CampaignDetailsComponent implements OnInit {
  campaignId: number;
  campaignToDisplay: Campaign;

  constructor() { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.campaignId = parseInt(urlParameters['id']);
    });
    this.campaignToDisplay = this.campaignsService.getCampaignId(this.campaignId);
  }

}
