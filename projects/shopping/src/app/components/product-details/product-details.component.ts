import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  public ViewName:string="BasicDetails";
   public ViewClick(viewname:string){
    this.ViewName=viewname;
   }
  
 
}
