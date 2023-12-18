import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Transaction, TransactionHistoryService } from './transaction-history.service';
import { faEllipsis, faFilter, faFileExport, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FontAwesomeModule],
  providers: [TransactionHistoryService],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.scss'
})
export class TransactionHistoryComponent {
  
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faFilter = faFilter;
  faFileExport = faFileExport;
  faEllipsis = faEllipsis;
  transactions: Transaction[] = [];
  isPopupVisible: boolean = false;
  selectedTransaction: any ;

  constructor(private transactionHistoryService: TransactionHistoryService){}
   
  ngOnInit() {
   
    this.transactionHistoryService.getData().subscribe((data: any) => {
      this.transactions = data.transactions;
      console.log(this.transactions)
    });
  }

  showPopup(transaction: any) {
    this.selectedTransaction = transaction;
    this.isPopupVisible = true;
    console.log("show")
  } 

  closePopup() {
    this.selectedTransaction = null;
    this.isPopupVisible = false;
  }
}
