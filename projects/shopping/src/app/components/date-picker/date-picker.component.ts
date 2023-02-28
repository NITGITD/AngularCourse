import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit{
  public Products:FakestoreProductContract[]=[];
 ngOnInit(): void {
   fetch(`https://fakestoreapi.com/products`)
   .then(res=>res.json())
   .then(data=>{
    this.Products=data
   })
 }
 
}
