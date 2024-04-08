import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.scss'
})
export class ThankyouComponent {
  constructor(private location: Location, private titleService: Title, private metaService: Meta) {}

  goBack() {
    this.location.back();
  }


  ngOnInit() {
    // Set page title
    this.titleService.setTitle('Pursuit Of Earth | Privacy Policy');
  
    // Set meta description
    this.metaService.updateTag({
      name: 'Pursuit Of Earth | Thankyou',
      content: 'Get the best deals on your dream home with Pursuit Of Earth. We offer a wide range of residential properties in Bangalore. Book your dream home now!'
    });
  
    // Set Open Graph (OG) meta tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Pursuit Of Earth | Thankyou'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Get the best deals on your dream home with Pursuit Of Earth. We offer a wide range of residential properties in Bangalore. Book your dream home now!'
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: window.location.protocol + '//' + window.location.host + '/favicon.ico'
    });    
  }
  
}
