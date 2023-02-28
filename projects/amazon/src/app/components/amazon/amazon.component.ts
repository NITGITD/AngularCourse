import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
import { FakestoreService } from '../../services/fakestore.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit{

  public Products:FakestoreProductContract[]=[];
  constructor(private data:FakestoreService){

  }
  ngOnInit(): void {
    this.data.GetProducts().subscribe(data=>this.Products=data);
  }
}
