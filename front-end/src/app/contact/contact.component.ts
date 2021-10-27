import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService],
})
export class ContactComponent implements OnInit {
  contacts: any[] = [];
  contact!: Contact;
  first_name!: string;
  last_name!: string;
  phone!: string;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContact().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  addContact() {
    var newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
    };

    this.contactService.addContact(newContact).subscribe((contact) => {
      this.contacts.push(contact);
      this.contactService.getContact().subscribe((contacts) => {
        this.contacts = contacts;
      });
    });
  }

  deleteContact(id: any) {
    var contacts = this.contacts;
    this.contactService.deleteContact(id).subscribe((data) => {
      if (data.n == 1) {
        for (let i = 0; i < contacts.length; i++) {
          if (contacts[i]._id == id) {
            contacts.splice(i, 1);
          }
        }
      }
    });

    this.contactService.getContact().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}
