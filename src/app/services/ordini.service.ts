import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Stato } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrdiniService {
  private url = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.url);
  }
    patchStato(id: number, stato: Stato): Observable<Order> {
    const order = { stato: stato };  
    return this.http.patch<Order>(`${this.url}/${id}`, order);
  }

}
