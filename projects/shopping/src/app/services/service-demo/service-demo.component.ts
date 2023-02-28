import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
import { FakestoreService } from '../fakestore.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit{

  public Categories:string[]=[];
  public Products:FakestoreProductContract[]=[];
  constructor(private fakestore:FakestoreService){

  }
  ngOnInit(): void {
   this.fakestore.GetCategories().subscribe(data=>this.Categories=data);
   this.fakestore.GetProducts().subscribe(data=>this.Products=data);
  }

}
