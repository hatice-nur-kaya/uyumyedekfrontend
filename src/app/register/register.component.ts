import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationError: string = ''; 

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['user', Validators.required] 
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.http.post('http://uyumyedekv2.test/api/auth/create', this.registrationForm.value)
        .subscribe(
          (response: any) => {
            console.log('Registration successful', response);
          },
          (error) => {
            console.error('Registration failed', error);
            this.registrationError = 'Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.'; 
          }
        );
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}