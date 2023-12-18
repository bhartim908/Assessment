import { Component } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { MoneyStatistics, MoneyStatisticsService } from './money-statistics.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import Highcharts from 'highcharts';
import { faArrowTrendUp, faEllipsis, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-statistics-card-graph',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule, HttpClientModule, FontAwesomeModule],
  providers: [MoneyStatisticsService],
  templateUrl: './statistics-card-graph.component.html',
  styleUrl: './statistics-card-graph.component.scss'
})
export class StatisticsCardGraphComponent {
  faAngleDown = faAngleDown;
  faEllipsis = faEllipsis;
  faArrowTrendUp = faArrowTrendUp;
  receivedData: any = {};
  totalIncome: MoneyStatistics | undefined;
  totalExpense: MoneyStatistics | undefined;
  totalInvestment: MoneyStatistics | undefined;
  Highcharts: typeof Highcharts = Highcharts;

  constructor(private moneystatisticsservice: MoneyStatisticsService) { }


  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      height: 250,
      width: 780
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      lineColor: 'transparent',
      accessibility: {
        description: ''
      },
      labels: {
        style: {
          fontSize: '10px',
        },

      },
    },
    yAxis: {
      min: 0,
      tickInterval: 10,
      gridLineDashStyle: 'Dot',
      gridLineColor: 'lightgrey',
      gridLineWidth: 1,
      max: 50,
      labels: {
        formatter: function () {
          return '$' + (this.value) + 'K';
        },
        style: {
          fontSize: '10px',
        },
      },
      title: {
        text: ''
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 1,
        borderRadius: 5,
        groupPadding: 0.3
      }
    },
    legend: {
      margin: 30,
      itemStyle: {
        fontSize: "11",
        padding: "20",
        fontWeight: 'bold',
      }
    },
    series: [
      {
        type: 'column',
        name: 'Income',
        data: [4, 20, 10, 6, 7, 50, 30, 40, 25, 15, 18, 22],
        color: '#808080' // Color code for Income series (gray)
      },
      {
        type: 'column',
        name: 'Investment',
        data: [16, 20, 5, 24, 18, 39, 10, 45, 31, 16, 40, 20],
        color: '#444457'
      },
      {
        type: 'column',
        name: 'Expense',
        data: [16, 36, 50, 14, 37, 30, 20, 45, 28, 10, 33, 27],
        color: '#091c34'
      }
    ]
  };
  ngOnInit() {
    this.moneystatisticsservice.getData().subscribe((data) => {
      this.receivedData = data;
      this.totalIncome = this.receivedData.money_statistics.total_income;
      this.totalExpense = this.receivedData.money_statistics.total_expense;
      this.totalInvestment = this.receivedData.money_statistics.total_investment;
    })
  }

}
