import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-terms-of-use',
  standalone: true,
  imports: [ RouterLink, MatIconModule],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.scss'
})
export class TermsOfUseComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private location: Location
  ) {}

  ngOnInit() {
    // Set page title
    this.titleService.setTitle('Pursuit Of Earth | Terms of Use');

    // Set meta description
    this.metaService.updateTag({
      name: 'Pursuit Of Earth | Terms of Use',
      content:
        'Get the best deals on your dream home with Pursuit Of Earth. We offer a wide range of residential properties in Bangalore. Book your dream home now!',
    });

    // Set Open Graph (OG) meta tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Pursuit Of Earth | Terms of Use',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Get the best deals on your dream home with Pursuit Of Earth. We offer a wide range of residential properties in Bangalore. Book your dream home now!',
    });
    this.metaService.updateTag({
      property: 'og:image',
      content:
        window.location.protocol + '//' + window.location.host + '/favicon.ico',
    });
  }
  goBack(): void {
    this.location.back();
  }
}
