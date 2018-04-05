import { Component, OnInit } from '@angular/core';
import { CampaignsService } from '../campaigns.service';
import { Campaign } from '../models/campaign.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
  providers: [CampaignsService]
})
export class CampaignsComponent implements OnInit {
  campaigns: FirebaseListObservable<any[]>;

  constructor(private router: Router, private campaignsService: CampaignsService) { }

  ngOnInit() {
    this.campaigns = this.campaignsService.getCampaigns();
  }

  goToCampaign(clickedCampaign: Campaign) {
    this.router.navigate(['campaigns', clickedCampaign.$key]);

  }

}
