import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faCubes } from '@fortawesome/free-solid-svg-icons';
import { faBell,faEnvelope } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './top-navigation.component.html',
  styleUrl: './top-navigation.component.scss'
})
export class TopNavigationComponent {
  hide : boolean = false;
  faSearch = faSearch;
  faMessage = faEnvelope;
  faNotification = faBell;
  faCubes = faCubes;
}
