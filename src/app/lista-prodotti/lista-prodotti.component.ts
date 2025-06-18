import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ProdottiService } from '../services/prodotti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdiniService } from '../services/ordini.service';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent {
  @Input()
  
  products: Product[]= [];

  constructor(private productService: ProdottiService, private router: Router,private route: ActivatedRoute, private orderService: OrdiniService){
   const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.orderService.getOrders().subscribe(orders=>{
        const prods = orders.filter(o => o.id == Number(id))[0].prodotti;
        this.products = prods;
      })
   }else{
    this.caricaProdotti();
   }
    
  }

  caricaProdotti(){
    this.productService.getProducts().subscribe(prodotti=>{
      this.products = prodotti;
    });
  }


  aggiornaProdotto(p: Product){
    this.router.navigate(['/form-prodotti', p.id])
  }

  eliminaProdotto(id: number){
    this.productService.deleteProduct(id).subscribe({
      next:()=>{
        console.log('eliminato')
        this.caricaProdotti();
      }
    });
    //add sweetalert
  }

  dettagli(id: number){
    this.router.navigate(['/prodotto', id])
  }
}
