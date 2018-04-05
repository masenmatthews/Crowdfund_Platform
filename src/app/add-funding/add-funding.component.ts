import { Component, OnInit } from '@angular/core';
import { Campaign } from '../models/campaign.model';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-add-funding',
  templateUrl: './add-funding.component.html',
  styleUrls: ['./add-funding.component.css'],
  providers: [CampaignsService]
})
export class AddFundingComponent implements OnInit {

  constructor(private campaignService: CampaignsService) { }

  ngOnInit() {
  }

  submitForm(title: string, manager: string, description: string, dollars: number) {
    const newCampaign: Campaign = new Campaign(title, manager, description, dollars);
    this.campaignService.addCampaign(newCampaign);
  }

}
