import { Component } from '@angular/core';
import { ApplyRequestComponent } from '../apply-request/apply-request.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConnectService } from '../../../connect.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatButtonModule, 
    MatDialogModule
  ],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.css'
})
export class LeaveComponent {

  constructor(
        private dialog: MatDialog,
        // private route: Router,
        private connect: ConnectService,
        // private http: HttpClient
      ) {}
  
      Modal(): void {
        this.dialog.open(ApplyRequestComponent, {
          width: '940px',
          height: '590px',
          maxWidth: '2000px',
          maxHeight: '2000px',
        });
      }

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
