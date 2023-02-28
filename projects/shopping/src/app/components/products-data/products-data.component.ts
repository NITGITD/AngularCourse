import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
import { FakestoreComponent } from '../fakestore/fakestore.component';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrls: ['./products-data.component.css']
})
export class ProductsDataComponent implements OnInit {

  public Products: FakestoreProductContract[] = [];
  public ElectronicsCount: number = 0;
  public JeweleryCount: number = 0;
  public MensCount: number = 0;
  public WomensCount: number = 0;
  public AllCount: number = 0;

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.Products = data;
        this.AllCount=data.length;
        this.ElectronicsCount=data.filter((product:any)=>product.category=='electronics').length;
        this.JeweleryCount=data.filter((product:any)=>product.category=='jewelery').length;
        this.MensCount=data.filter((product:any)=>product.category=="men's clothing").length;
        this.WomensCount=data.filter((product:any)=>product.category=="women's clothing").length;
      });
  }
  public GetCategoryName(e:any){
    if(e=='all'){
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.Products = data;
    })
  }else{
    fetch(`https://fakestoreapi.com/products/category/${e}`)
    .then(response=>response.json())
    .then(data=>{
      this.Products=data;
    })
  }
  }
  public product:any={}
  public GetProduct(e:any){
    this.product=e;
  }

}
