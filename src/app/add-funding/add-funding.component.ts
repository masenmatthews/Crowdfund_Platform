import { Component, OnInit } from '@angular/core';
import {Campaign} from '../models/campaign.model';

@Component({
  selector: 'app-add-funding',
  templateUrl: './add-funding.component.html',
  styleUrls: ['./add-funding.component.css']
})
export class AddFundingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, manager: string, description: string, dollars: number) {
    let newCampaign: Campaign = new Campaign(title, manager, description, dollars);
  }

}
