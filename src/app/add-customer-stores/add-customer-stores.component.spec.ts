import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerStoresComponent } from './add-customer-stores.component';

describe('AddCustomerStoresComponent', () => {
  let component: AddCustomerStoresComponent;
  let fixture: ComponentFixture<AddCustomerStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCustomerStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
