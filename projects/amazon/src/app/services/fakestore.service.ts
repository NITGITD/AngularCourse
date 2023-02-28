import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakestoreProductContract } from '../contracts/FakestoreProductContract';

@Injectable()
export class FakestoreService {

  public baseUrl="https://fakestoreapi.com/products";
  public Categories="https://fakestoreapi.com/products/categories";

  constructor(private http:HttpClient) { }

public GetProduct(id:number):Observable<FakestoreProductContract>{
  return this.http.get<FakestoreProductContract>(`https://fakestoreapi.com/products/${id}`);
}

  public GetProducts():Observable<FakestoreProductContract[]>{
    return this.http.get<FakestoreProductContract[]>(this.baseUrl);
  }
  public GetCategories():Observable<string[]>{
    return this.http.get<string[]>(this.Categories);
  }
  public GetSpecificCategory(categoryName:string):Observable<FakestoreProductContract[]>{
    return this.http.get<FakestoreProductContract[]>(`https://fakestoreapi.com/products/category/${categoryName}`);
  }
}
