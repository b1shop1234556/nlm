import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-view-announcement',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './view-announcement.component.html',
  styleUrl: './view-announcement.component.css'
})
export class ViewAnnouncementComponent {

}
