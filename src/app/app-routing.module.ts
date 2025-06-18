import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { ListaOrdiniComponent } from './lista-ordini/lista-ordini.component';
import { AggiungiProdottoComponent } from './aggiungi-prodotto/aggiungi-prodotto.component';
import { ProdottoDetailsComponent } from './prodotto-details/prodotto-details.component';

const routes: Routes = [
  {path: '', component: ListaProdottiComponent},
  {path: 'prodotti', component: ListaProdottiComponent},
  {path: 'prodotti/:id', component: ListaProdottiComponent},
  {path: 'ordini', component: ListaOrdiniComponent},
  {path: 'form-prodotti', component: AggiungiProdottoComponent},
  {path: 'form-prodotti/:id', component: AggiungiProdottoComponent},
  {path: 'prodotto/:id', component: ProdottoDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
