import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';
import { FakestoreService } from '../../services/fakestore.service';

@Component({
  selector: 'app-amazon-more-details',
  templateUrl: './amazon-more-details.component.html',
  styleUrls: ['./amazon-more-details.component.css']
})
export class AmazonMoreDetailsComponent {

  public Product:FakestoreProductContract = {
    id : 0,
    title: '',
    description: '',
    price : 0,
    rating: {rate:0, count: 0},
    image: '',
    category: ''
};
public id:any = '';
constructor(private route: ActivatedRoute, private data: FakestoreService){

}
ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.data.GetProduct(this.id).subscribe(data=> this.Product = data);
}

}
