import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCreditCard, faLayerGroup, faListDots, faChartBar, faPlusCircle, faCog, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faMessage, faMoon } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-left-navigation',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './left-navigation.component.html',
  styleUrl: './left-navigation.component.scss'
})
export class LeftNavigationComponent {
  faCreditCard = faCreditCard;
  faLayerGroup = faLayerGroup;
  faListDots = faListDots;
  faChartBar = faChartBar;
  faPlusCircle = faPlusCircle;
  faMessage = faMessage;
  faMoon = faMoon;
  faCog = faCog; 
  faLocationArrow = faLocationArrow;
}
