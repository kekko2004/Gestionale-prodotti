import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ProdottiService } from '../services/prodotti.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prodotto-details',
  templateUrl: './prodotto-details.component.html',
  styleUrls: ['./prodotto-details.component.css']
})
export class ProdottoDetailsComponent {
  @Input()
  product!: Product

  constructor(private productService: ProdottiService,private route: ActivatedRoute, private router: Router){}
ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  this.productService.getProducts().subscribe(prods=>{
    this.product = prods.find(p => p.id == Number(id))|| this.product;
  })
    
}
  elimina(id: number){
    this.productService.deleteProduct(id).subscribe();
    this.productService.getProducts().subscribe(prods=>
    {
      prods.filter(p=> p.id = id)
    }
    )
    //reinderizza all home;
    this.router.navigate(['/']);
  }
}
