import { Component} from '@angular/core';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { TotalBalanceCardComponent } from './total-balance-card/total-balance-card.component';
import { MyCardStaticColumnComponent } from './my-card-static-column/my-card-static-column.component';
import { StatisticsCardGraphComponent } from './statistics-card-graph/statistics-card-graph.component';
import { CommonModule } from '@angular/common';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

@Component({
  selector: 'app-maindashboard',
  standalone: true,
  imports: [LeftNavigationComponent,
            TopNavigationComponent,
            MyCardStaticColumnComponent,
            TotalBalanceCardComponent,
            StatisticsCardGraphComponent,
            TransactionHistoryComponent,
            CommonModule,
          ],
  templateUrl: './maindashboard.component.html',
  styleUrl: './maindashboard.component.scss'
})
export class MaindashboardComponent {

}
