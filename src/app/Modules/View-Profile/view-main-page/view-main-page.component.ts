import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-view-main-page',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './view-main-page.component.html',
  styleUrl: './view-main-page.component.css'
})
export class ViewMainPageComponent {

}
