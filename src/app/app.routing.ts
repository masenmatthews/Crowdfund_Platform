import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddFundingComponent} from './add-funding/add-funding.component';
import {AboutComponent} from './about/about.component';
import {CampaignsComponent} from './campaigns/campaigns.component';

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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
