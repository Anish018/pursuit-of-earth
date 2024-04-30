// home.component.ts
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { PlanCarouselComponent } from '../plan-carousel/plan-carousel.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';
import { AutoChangingImagesComponent } from '../auto-changing-images/auto-changing-images.component';
import { Title, Meta } from '@angular/platform-browser';



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
    AutoChangingImagesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Set page title and meta descriptions
    this.titleService.setTitle('The Earth Sounds | Eco-luxury Residences');
    this.metaService.updateTag({
      name: 'description',
      content: 'Get the best deals on your dream home with The Earth Sounds. We offer a wide range of residential properties in Bangalore. Book your dream home now!'
    });

    // Set Open Graph (OG) meta tags
    this.metaService.updateTag({ property: 'og:title', content: 'The Earth Sounds | Eco-luxury Residences' });
    this.metaService.updateTag({ property: 'og:description', content: 'Get the best deals on your dream home with The Earth Sounds. We offer a wide range of residential properties in Bangalore. Book your dream home now!' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://www.theearthsounds.com/assets/images/favicon.jpg' }); // Use a more appropriate OG image
  }


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
      title: 'Forest',
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

    // Other component properties and methods

    scrollTo(sectionId: string): void {
      const section = document.getElementById(sectionId);
      if (section) {
        // Calculate the position to scroll to, considering the desired offset
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        const offset = 100; // Desired offset from the top in pixels
        const scrollToPosition = sectionTop - offset;
    
        // Scroll to the calculated position smoothly
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    }
    
    
    
}
