import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-leave-main-page',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './leave-main-page.component.html',
  styleUrl: './leave-main-page.component.css'
})
export class LeaveMainPageComponent {

}
