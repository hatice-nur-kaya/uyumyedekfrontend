import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://uyumyedekv2.test/api';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    // localStorage'dan token'ı al
    const token = localStorage.getItem('userToken');
    // HTTP Headers nesnesini oluştur ve Authorization header'ına token'ı ekle
    const headers = new HttpHeaders({
      'Authorization': `Bearer 7|56kYvY5BAYq8nzaJT04xEy7JtyCm8TceunZpXTJx79fdedf8`
    });
    
    // API çağrısını headers ile birlikte yap
    return this.http.get<any>(`${this.apiUrl}/user/getAll`, { headers });
  }
}