import { Component } from '@angular/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactUsComponent, HeaderComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
