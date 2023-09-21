import { Component } from '@angular/core';
import { TransactionHistoryItem } from '../../interfaces/transaction-history-item';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {
      transaction1 = new TransactionHistoryItem(
        "writeDowns", "Transfer to Johdi", "Personal Payment", "212.42"
      )
      transaction2 = new TransactionHistoryItem(
        "refill", "Transfer to Johdi", "Personal Payment", "1223.00"
      )
}
