import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProdottiService } from '../services/prodotti.service';
import { Product } from '../models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aggiungi-prodotto',
  templateUrl: './aggiungi-prodotto.component.html',
  styleUrls: ['./aggiungi-prodotto.component.css']
})
export class AggiungiProdottoComponent {
  productForm = this.formBuilder.group({
    nome: ['', Validators.required],
    img: ['', Validators.required],
    descrizione: [``, Validators.required],
    giacienza: [0, Validators.required],

  });
  productDetails!: Product;
  titolo = "";
  button = "";
  product_id !: number; // mi appoggio per id, visto che quando lo recupero sta nel costruttore e fuori non si puo usare
  constructor(private formBuilder: FormBuilder,
    private productService: ProdottiService,
    private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product_id = Number(id);
    if (id) {
      this.titolo = "Modifica "
      this.button = "Modifica"
      this.productService.getProducts().subscribe(prods => {
        next: {
          this.productDetails = prods.find(p => p.id = Number(id)) || this.productDetails;
          this.productForm.patchValue(this.productDetails);
        }
      });
    } else{
      this.titolo = "Aggiungi "
      this.button = "Aggiungi"
    }


  }


  submit() {
    if (this.productForm.valid) {
      if (this.product_id) {
        
        this.productService.updateProduct(this.productDetails).subscribe({
          next: () => {
            console.log('modificato', this.productDetails);

          },
          error: () => {

          }
        })
      }else{
        const product = this.productForm.value as Omit<Product, 'id'>;
      this.productService.addProduct(product).subscribe(prod => {
        next: () => console.log(prod)
        this.productDetails = prod;
        this.productForm.reset();
      })
      }
      
      
    }

  }
}
