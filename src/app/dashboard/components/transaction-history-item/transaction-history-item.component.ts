import { Component, OnInit, Input } from '@angular/core';
import { ITransactionHistoryItem } from '../../interfaces/transaction-history-item';

@Component({
  selector: 'app-transaction-history-item',
  templateUrl: './transaction-history-item.component.html',
  styleUrls: ['./transaction-history-item.component.scss']
})
export class TransactionHistoryItemComponent implements OnInit {
  @Input() Transaction: ITransactionHistoryItem;
  constructor() {}
  ngOnInit(): void {

  }
  classColorArrow() {
    return {
      "transaction-history-item__status-icon--refill": this.Transaction.type == "refill",
      "transaction-history-item__status-icon--writeDowns":
        this.Transaction.type == "writeDowns",
    };
  }
  classColorSymbol() {
    return {
      "transaction-history-item__sum--refill": this.Transaction.type == "refill",
      "transaction-history-item__sum--writeDowns": this.Transaction.type == "writeDowns",
    };
  }
  transactionSymbol() {
    return this.Transaction.type == "refill" ? "+" : "-";
  }
}
