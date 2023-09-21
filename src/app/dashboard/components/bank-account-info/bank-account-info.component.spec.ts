import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountInfoComponent } from './bank-account-info.component';

describe('BankAccountInfoComponent', () => {
  let component: BankAccountInfoComponent;
  let fixture: ComponentFixture<BankAccountInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankAccountInfoComponent]
    });
    fixture = TestBed.createComponent(BankAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
