import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  // Get contacts
  getContact() {
    return this.http
      .get('http://localhost:3000/users')
      .pipe(map((res: any) => res));
  }

  // add contacts
  addContact(contact: Contact) {
    var header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http
      .post('http://localhost:3000/users/contact', contact, { headers: header })
      .pipe(map((res: any) => res));
  }

  deleteContact(id: any) {
    return this.http
      .delete(`http://localhost:3000/users/contact/${id}`)
      .pipe(map((res: any) => res));
  }
}
