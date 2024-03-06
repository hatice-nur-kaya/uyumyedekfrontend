import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css'
})
export class UserModalComponent {
  user = {
    name: '',
    email: '',
    password: '',
    role: 'user' 
  };

  constructor(public dialogRef: MatDialogRef<UserModalComponent>) { }

  onSubmit(): void {
    console.log(this.user);
    this.dialogRef.close(this.user);
  }
}