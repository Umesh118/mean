import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  send(feedback: any) {
    return this.http
      .post('http://localhost:3000/feedback', feedback)
      .pipe(map((res) => res));
  }

  getFeedback() {
    return this.http
      .get('http://localhost:3000/feedback')
      .pipe(map((res) => res));
  }
}
