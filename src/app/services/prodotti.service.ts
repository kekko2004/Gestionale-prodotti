import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  private url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }


  addProduct(p: Omit<Product, 'id'>): Observable<Product>{
    return this.http.post<Product>(this.url, p);
  }

  updateProduct(p:Product):  Observable<Product>{
    return this.http.put<Product>(this.url + '/'+ p.id, p);
  }

  deleteProduct(id: number): Observable<void> {
  return this.http.delete<void>(`${this.url}/${id}`)
}
}
