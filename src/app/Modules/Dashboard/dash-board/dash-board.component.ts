import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CommonModule, 
    RouterModule, 
    MatProgressSpinnerModule,
    MatFormField,MatLabel,
    RouterLink,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})
export class DashBoardComponent {

  inquiries: any;
  students: any[] = [];
  totalEnrollments: number = 0;
  juniorHighTotal: number = 0;
  seniorHighTotal: number = 0;
  currentDate: Date = new Date();
  activeSection: string = 'dashboard'; // Default active section
  uid: any;
  searchTerm: string = '';
  //  searchTerm: string = '';
    // currentDate: Date = new Date(); 
    // activeSection: string = 'dashboard'; 
  
    setActive(section: string): void {
      this.activeSection = section; 
    }

    constructor(
      // private dialog: MatDialog,
      // private route: Router,
      // private connect: ConnectService,
      // private http: HttpClient
    ) {}

    // Modal(id: any): void {
    //   this.dialog.open(MyLeaveRequestComponent, {
    //     width: '920px',
    //     height: '590px',
    //     maxWidth: '2000px',
    //     maxHeight: '2000px',
    //   });
    // }
    
  
}
