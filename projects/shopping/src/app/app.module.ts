import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NetflixRegister } from './components/NetflixRegister';
import { NetflixIndexComponent } from './components/Netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './components/Netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './components/Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './components/Netflix/netflix-register/netflix-register.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ForDemoComponent } from './components/for-demo/for-demo.component';
import { ShopperTemplateComponent } from './components/shopper-template/shopper-template.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { EmiComponent } from './components/emi/emi.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { ProductsDataComponent } from './components/products-data/products-data.component';
import { FilterComponent } from './components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { PipeComponent } from './pipe/pipe/pipe.component';
import { SentencePipe } from './pipe/sentence.pipe';
import { SortingPipe } from './pipe/sorting.pipe';
import { ServiceDemoComponent } from './services/service-demo/service-demo.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    NetflixRegister,
    LoginComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    DataBindingComponent,
    FakestoreComponent,
    ContentProjectionComponent,
    MobileDetailsComponent,
    ProductDetailsComponent,
    ForDemoComponent,
    ShopperTemplateComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EmiComponent,
    ChildComponent,
    ParentComponent,
    BmiComponent,
    ProductsDataComponent,
    FilterComponent,
    MaterialDemoComponent,
    DatePickerComponent,
    PipeComponent,
    SentencePipe,
    SortingPipe,
    ServiceDemoComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ScrollingModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [ReactiveValidationComponent
  ]
})
export class AppModule { }
