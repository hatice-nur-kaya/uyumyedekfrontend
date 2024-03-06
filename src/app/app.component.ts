import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ContentComponent, HttpClientModule, FormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {} 

  ngOnInit() {
    this.router.navigate(['/register']);
  }
}