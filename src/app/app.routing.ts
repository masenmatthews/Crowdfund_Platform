import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddFundingComponent} from './add-funding/add-funding.component';
import {AboutComponent} from './about/about.component';
import {CampaignsComponent} from './campaigns/campaigns.component';
import {CampaignDetailsComponent} from './campaign-details/campaign-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-project',
    component: AddFundingComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'campaigns',
    component: CampaignsComponent
  },
  {
    path: 'campaigns/:id',
    component: CampaignDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
