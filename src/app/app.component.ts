import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
             RouterOutlet,
             MaindashboardComponent,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assesement';
}
