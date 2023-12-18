import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TotalBalanceService, Balance } from './total-balance.service';
import { CommonModule } from '@angular/common';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-total-balance-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FontAwesomeModule],
  providers: [TotalBalanceService],
  templateUrl: './total-balance-card.component.html',
  styleUrl: './total-balance-card.component.scss'
})
export class TotalBalanceCardComponent implements OnInit {

  totalBalance: any = {};
  faEllipsis = faEllipsis;
  constructor(private _totalBalance: TotalBalanceService) { }

  ngOnInit() {
    this._totalBalance.getData().subscribe(
      (data: any) => {
        this.totalBalance = data.balance;
      }
    )
  }
}
