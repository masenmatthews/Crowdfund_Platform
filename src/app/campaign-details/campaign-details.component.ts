import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Campaign } from '../models/campaign.model';
import { CampaignsService } from '../campaigns.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css'],
  providers: [CampaignsService]
})

export class CampaignDetailsComponent implements OnInit {
  campaignId: number;
  campaignToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private campaignsService: CampaignsService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.campaignId = urlParameters['id'];
    });
    this.campaignToDisplay = this.campaignsService.getCampaignId(this.campaignId);
  }

}
