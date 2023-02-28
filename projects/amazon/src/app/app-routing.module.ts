import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonAdminComponent } from './components/amazon-admin/amazon-admin.component';
import { AmazonDetailsComponent } from './components/amazon-details/amazon-details.component';
import { AmazonElectronicsComponent } from './components/amazon-electronics/amazon-electronics.component';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { AmazonLoginComponent } from './components/amazon-login/amazon-login.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonMoreDetailsComponent } from './components/amazon-more-details/amazon-more-details.component';
import { AmazonNotfoundComponent } from './components/amazon-notfound/amazon-notfound.component';
import { AmazonWomenComponent } from './components/amazon-women/amazon-women.component';
import { AmazonComponent } from './components/amazon/amazon.component';
import { AmazonAdminGuard } from './gaurd/amazon-admin.guard';

const routes: Routes = [
  {path:"home",component:AmazonComponent},
  {path:"jewelery",component:AmazonJeweleryComponent},
  {path:"electronics",component:AmazonElectronicsComponent},
  {path:"mens",component:AmazonMensComponent},
  {path:"women",component:AmazonWomenComponent},
  {path:"details/:id",component:AmazonDetailsComponent,
   children:[
    {path:"more/:id",component:AmazonMoreDetailsComponent}
   ]
},
{path:"login",component:AmazonLoginComponent},
{path:"admin",component:AmazonAdminComponent,canActivate:[AmazonAdminGuard]},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:AmazonNotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
