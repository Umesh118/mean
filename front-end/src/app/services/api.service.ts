import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getTypeRequest(url: any) {
    return this.http.get(`${url}`).pipe(
      map((res) => {
        return res;
      })
    );
  }

  postTypeRequest(url: any, payload: any) {
    return this.http.post(`${url}`, payload);
  }

  putTypeRequest(url: any, payload: any) {
    return this.http.put(`${url}`, payload).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
