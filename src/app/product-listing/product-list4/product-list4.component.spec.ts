import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList4Component } from './product-list4.component';

describe('ProductList4Component', () => {
  let component: ProductList4Component;
  let fixture: ComponentFixture<ProductList4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductList4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductList4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
