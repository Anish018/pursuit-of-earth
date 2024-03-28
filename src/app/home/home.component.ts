// home.component.ts
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { PlanCarouselComponent } from '../plan-carousel/plan-carousel.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';
import { AutoChangingImagesComponent } from '../auto-changing-images/auto-changing-images.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CommonModule,
    PlanCarouselComponent,
    AccordionComponent,
    ContactUsComponent,
    FooterComponent,
    AutoChangingImagesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  masterPlan: string[] = [
    'Driveway',
    'Driveway Island',
    'Club Drop-off',
    'Drop-off Feature Wall',
    'Skywalk',
    'Bio-Pond',
    'Floating Deck',
    'Walkway',
    'Club Lawn',
    'Swimming Pool',
    'Shallow Pool',
    'Kids’ Pool',
    'Pool Deck',
    'Cycling Track',
    'Senior’s zone',
    'Kids’ Play Area',
    'Tot-lot',
    'Seating Pod',
    'Stepped Green Amphitheatre',
    'Hanging Deck',
    'Forest',
    'Multipurpose court (Badminton + Basketball)',
    'Cricket Pitch',
    'Adventure Jungle',
    'Evening Pavilion',
    'Pavilion Lounge',
    'Parking',
    'Contemplation zone',
    'Services',
    'Driveway Canopy',
    'Sand pit',
    'Stepped Green',
    'Spiral landing platform',
    'Pause Point with Seats',
    'Forest lawn',
    'Yoga Nook',
    'Meditation Deck',
    'Seclusion Pod',
    'Fire lawn',
    'Garden Pavilion',
    'Play lawn',
    'Badminton court',
  ];
  amenities = [
    {
      icon: 'forrest.png',
      title: 'Forrest',
    },
    {
      icon: 'sensory.png',
      title: 'Sensory Pathway',
    },
    {
      icon: 'gym.png',
      title: 'High-rise Gym',
    },
    {
      icon: 'pool.png',
      title: 'Swimming Pool',
    },
    {
      icon: 'play-area.png',
      title: 'Kids Play Area ',
    },
    {
      icon: 'court.png',
      title: 'Multipurpose Court',
    },
    {
      icon: 'amphi.png',
      title: 'Stepped Green Amphitheatre',
    },
    {
      icon: 'senior.png',
      title: 'Senior Zone',
    },
  ];
}
