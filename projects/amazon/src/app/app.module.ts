import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazonComponent } from './components/amazon/amazon.component';
import { AmazonIndexComponent } from './components/amazon-index/amazon-index.component';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonWomenComponent } from './components/amazon-women/amazon-women.component';
import { AmazonNotfoundComponent } from './components/amazon-notfound/amazon-notfound.component';
import { AmazonElectronicsComponent } from './components/amazon-electronics/amazon-electronics.component';
import { HttpClientModule } from '@angular/common/http';
import { FakestoreService } from './services/fakestore.service';
import { AmazonMoreDetailsComponent } from './components/amazon-more-details/amazon-more-details.component';
import { AmazonDetailsComponent } from './components/amazon-details/amazon-details.component';
import { AmazonAdminComponent } from './components/amazon-admin/amazon-admin.component';
import { AmazonLoginComponent } from './components/amazon-login/amazon-login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonComponent,
    AmazonIndexComponent,
    AmazonJeweleryComponent,
    AmazonMensComponent,
    AmazonWomenComponent,
    AmazonNotfoundComponent,
    AmazonElectronicsComponent,
    AmazonMoreDetailsComponent,
    AmazonDetailsComponent,
    AmazonAdminComponent,
    AmazonLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FakestoreService],
  bootstrap: [AmazonIndexComponent]
})
export class AppModule { }
