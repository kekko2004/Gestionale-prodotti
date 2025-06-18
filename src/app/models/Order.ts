import { Product } from "./Product";

export interface Order {
    data: string; stato: Stato; id: number; tell: number; indirizzo: string;
    prodotti: Product[];
}
export enum Stato {
    InAttesa = 'In attesa',
    InElaborazione = 'In elaborazione',
    Spedito = 'Spedito',
    Consegnato = 'Consegnato',
    Annullato = 'Annullato'
}