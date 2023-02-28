import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FakestoreProductContract } from '../contracts/FakestoreProductContract';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {

  public baseUrl="https://fakestoreapi.com/products";
  public Categories="https://fakestoreapi.com/products/categories";

  constructor(private http:HttpClient) { }

  public GetProducts():Observable<FakestoreProductContract[]>{
    return this.http.get<FakestoreProductContract[]>(this.baseUrl);
  }
  public GetCategories():Observable<string[]>{
    return this.http.get<string[]>(this.Categories);
  }
}
