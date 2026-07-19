import { Component } from '@angular/core';

import { Contact } from '../../shared/components/contact/contact';

@Component({
  selector: 'app-contact-page',
  imports: [Contact],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {}
