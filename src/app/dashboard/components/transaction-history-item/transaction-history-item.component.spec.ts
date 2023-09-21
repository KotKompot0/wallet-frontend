import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHistoryItemComponent } from './transaction-history-item.component';

describe('TransactionHistoryItemComponent', () => {
  let component: TransactionHistoryItemComponent;
  let fixture: ComponentFixture<TransactionHistoryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionHistoryItemComponent]
    });
    fixture = TestBed.createComponent(TransactionHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
