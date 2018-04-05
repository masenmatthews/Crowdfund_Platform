import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../campaigns.service';
import { Campaign } from '../models/campaign.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
  providers: [CampaignsService]
})
export class CampaignsComponent implements OnInit {
  campaigns: Campaign[];

  constructor(private router: Router, private campaignsService: CampaignsService) { }

  ngOnInit() {
    this.allCampaigns = this.campaignsService.getCampaigns();
  }

  goToCampaign(clickedCampaign: Campaign) {
    this.router.navigate(['campaigns', clickedCampaign.id]);
  }

}
