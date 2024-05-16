import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{
  @Input() isModal: boolean = false;

  isSending: boolean = false; // Track sending state

  constructor(
    private router: Router,
    @Optional() public dialogRef: MatDialogRef<ContactUsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
  ngOnInit() {
    if (this.data && this.data.isModal) {
      this.isModal = this.data.isModal;  // Set 'isModal' based on passed data
    }
  }

closeModal(): void {
  console.log('Attempting to close modal');
  if (this.dialogRef) {
    this.dialogRef.close();
  } else {
    console.error('Dialog reference not found');
  }
}

  
  

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