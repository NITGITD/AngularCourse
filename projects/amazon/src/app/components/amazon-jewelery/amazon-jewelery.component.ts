import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
import { FakestoreService } from '../../services/fakestore.service';

@Component({
  selector: 'app-amazon-jewelery',
  templateUrl: './amazon-jewelery.component.html',
  styleUrls: ['./amazon-jewelery.component.css']
})
export class AmazonJeweleryComponent implements OnInit{
   public products:FakestoreProductContract[]=[];
   constructor(private data:FakestoreService){

   }
  ngOnInit(): void {
    this.data.GetSpecificCategory("jewelery").subscribe(data=>
      this.products=data
    );
  }
}
