import { Component } from '@angular/core';
import { Order, Stato } from '../models/Order';
import { OrdiniService } from '../services/ordini.service';
import { Product } from '../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ordini',
  templateUrl: './lista-ordini.component.html',
  styleUrls: ['./lista-ordini.component.css']
})
export class ListaOrdiniComponent {
orders: Order[] = [];
id_ordine!:number;
mostra = false;
  statusOptions: string[] = Object.values(Stato); 
  constructor(private orderService: OrdiniService, private router: Router){
    this.caricaOrdini();
  }

  caricaOrdini(){
    this.orderService.getOrders().subscribe(orders=>{
      this.orders = orders;
    })
  }

  modificaStato(order: Order){
    this.orderService.patchStato(order.id, order.stato).subscribe(stato=>{
      console.log('lo stato cambia in =>', stato);
      this.caricaOrdini();
    })
  }
  mostraProdotti(id : number){
    console.log(id)
    this.mostra = !this.mostra;
    this.id_ordine = id;
    this.router.navigate(['/prodotti', id]);
  }

}
