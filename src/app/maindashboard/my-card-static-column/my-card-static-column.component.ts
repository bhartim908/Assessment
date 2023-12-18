import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoneyBill1,faIdCard, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { 
  faGamepad,faStopwatch20, faDesktop, faListDots, faEllipsis, faCubes, faCircleCheck, faPlusCircle, faRss, faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-card-static-column',
  standalone: true,
  imports: [MatCardModule,MatDividerModule,FontAwesomeModule,CommonModule],
  templateUrl: './my-card-static-column.component.html',
  styleUrl: './my-card-static-column.component.scss'
})
export class MyCardStaticColumnComponent {

  faCubes = faCubes;
  faEllipsis = faEllipsis;
  faIdCard = faIdCard;
  faCircleCheck = faCircleCheck;
  faPlusCircle = faPlusCircle;
  faRss = faRss;
  faPlusSquare = faPlusSquare;
  faLocationArrow = faLocationArrow;
  faMoneyBill1 = faMoneyBill1;
  faListDots = faListDots;
  
  savingPlanData:any=
    [
      {
          icon: faStopwatch20,
          item: "New Watch",
          target: "$2000",
          total: "$1000",
          percentage: "25"
      },
      {   
        icon: faGamepad,
          item: "Play Station 5",
          target: "$1000",
          total: "$600",
          percentage: "15"
      },
      {
          icon: faDesktop,
          item: "SystemKit",
          target: "$20000",
          total: "$10000",
          percentage:"25"
      }
  ];

}
