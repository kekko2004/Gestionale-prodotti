import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOrdiniComponent } from './lista-ordini.component';

describe('ListaOrdiniComponent', () => {
  let component: ListaOrdiniComponent;
  let fixture: ComponentFixture<ListaOrdiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaOrdiniComponent]
    });
    fixture = TestBed.createComponent(ListaOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
