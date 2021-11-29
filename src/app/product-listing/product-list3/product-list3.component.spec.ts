import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList3Component } from './product-list3.component';

describe('ProductList3Component', () => {
  let component: ProductList3Component;
  let fixture: ComponentFixture<ProductList3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductList3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
