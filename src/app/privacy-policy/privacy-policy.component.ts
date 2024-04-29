import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private location: Location
  ) {}

  ngOnInit() {
    // Set page title
    this.titleService.setTitle('The Earth Sounds | Privacy Policy');

    // Set meta description
    this.metaService.updateTag({
      name: 'The Earth Sounds | Privacy Policy',
      content:
        'Get the best deals on your dream home with The Earth Sounds. We offer a wide range of residential properties in Bangalore. Book your dream home now!',
    });

    // Set Open Graph (OG) meta tags
    this.metaService.updateTag({
      property: 'og:title',
      content: 'The Earth Sounds | Privacy Policy',
    });
    this.metaService.updateTag({
      property: 'og:description',
      content:
        'Get the best deals on your dream home with The Earth Sounds. We offer a wide range of residential properties in Bangalore. Book your dream home now!',
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
