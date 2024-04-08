import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  isSending: boolean = false; // Track sending state

  constructor(
    private router: Router
  ) {}


  sendEmail(event: Event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    this.isSending = true;

    // Here you need to add your service ID, template ID, and user ID
    emailjs.sendForm('service_zfmxvya', 'template_5m47dbm', event.target as HTMLFormElement, '6-QdLjlzl5V_YnnGJ')
      .then((response: EmailJSResponseStatus) => {
        // console.log('SUCCESS!', response.status, response.text);
        this.router.navigate(['/thankyou']);
        this.isSending = false;
        // Reset the form after successful submission
        (event.target as HTMLFormElement).reset();
        // Redirect to the thank you page
        this.router.navigate(['/thankyou']);
        // Show toast message
        // alert('Your message was sent successfully.'); 
      }, (error) => {
        console.error('FAILED...', error);
        this.isSending = false;
        // Show toast message
        alert('Failed to send the message. Please try again later.'); // Replace with your toast notification
      });
  }
}
