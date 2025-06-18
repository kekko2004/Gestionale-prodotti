import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoDetailsComponent } from './prodotto-details.component';

describe('ProdottoDetailsComponent', () => {
  let component: ProdottoDetailsComponent;
  let fixture: ComponentFixture<ProdottoDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottoDetailsComponent]
    });
    fixture = TestBed.createComponent(ProdottoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
