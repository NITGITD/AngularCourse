import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrls: ['./fakestore.component.css']
})
export class FakestoreComponent implements OnInit{
  constructor(){
    
  }
   public Product:FakestoreProductContract={
    id:0,
    title:'',
    price:0,
    description:'',
    category:'',
    image:'',
    rating:{rate:0,count:0}
   }
   public LoadProduct(id:number):void{
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.Product=data;
    })
   }
   ngOnInit(): void {
     this.LoadProduct(1);
   }
   public Count:number=1;
   public PreviosClick():void{
    this.Count--;
    this.LoadProduct(this.Count);
   }
   public NextClick():void{
    this.Count++;
    this.LoadProduct(this.Count);
   }
}
