import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public Title():string{
    return "Amazon Shopping Cart";
  }
  public Total(qty:number,price:number):number{
    return qty*price;
  }
}
