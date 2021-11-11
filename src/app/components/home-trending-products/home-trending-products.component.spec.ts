import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrendingProductsComponent } from './home-trending-products.component';

describe('HomeTrendingProductsComponent', () => {
  let component: HomeTrendingProductsComponent;
  let fixture: ComponentFixture<HomeTrendingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTrendingProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrendingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
