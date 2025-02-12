import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ConnectService } from '../../../connect.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-announcement',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatButtonModule, 
    MatDialogModule,
    CommonModule, 
    RouterModule, 
    MatProgressSpinnerModule,
    MatFormField,MatLabel,
    RouterLink,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.css'
})
export class AnnouncementComponent {
constructor(
        // private dialog: MatDialog,
        // private route: Router,
        private connect: ConnectService,
        // private http: HttpClient
      ) {}
  
      // Modal(): void {
      //   this.dialog.open(ApplyRequestComponent, {
      //     width: '940px',
      //     height: '590px',
      //     maxWidth: '2000px',
      //     maxHeight: '2000px',
      //   });
      // }

      // readonly dialog = inject(MatDialog)
      // readonly leavemanagementService = inject(ApiService);
      
      // dataSource = new MatTableDataSource<leavemanagement>([]);
      // displayedColumns: string[] = ['type', 'days_allowed','description', 'actions'];
    
      // ngOnInit(): void {
      //   this.getdata();
      // }
      // getdata(){
      //   this.leavemanagementService.getleave().subscribe(data => {
      //     this.dataSource.data = data;
      //   });
      // }
      
      // openDialog() {
      //   const dialogRef = this.dialog.open(CreateComponent, {
      //     width: 'auto',
      //     height: 'auto',
      //   });
      
      //   dialogRef.afterClosed().subscribe(result => {
      //     if (result) { // Only call getdata() if the dialog closed after successful submission
      //       this.getdata();
      //     }
      //   });
      // }
    
      // editleave(id:number) {
      //   const dialogRef = this.dialog.open(UpdateComponent, {
      //     width: 'auto',
      //     height: 'auto',
      //     data: { id: id } // Pass ID as data
      //   });
      
      //   dialogRef.afterClosed().subscribe(result => {
      //     if (result) { 
      //       this.getdata(); // Refresh data if update was successful
      //     }
      //   });
      // }
      
    
      
      // applyFilter(event: Event) {
      //   const filterValue = (event.target as HTMLInputElement).value;
      //   this.dataSource.filter = filterValue.trim().toLowerCase();
      // }
    
      // deleteleave(id: number): void {
      //   this.leavemanagementService.deleteleave(id).subscribe(() => {
      //     this.dataSource.data = this.dataSource.data.filter(employee => employee.id !== id);
      //   });
      // }
}
