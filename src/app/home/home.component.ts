// home.component.ts
import { Component, OnInit, Inject, HostListener, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { PlanCarouselComponent } from '../plan-carousel/plan-carousel.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';
import { AutoChangingImagesComponent } from '../auto-changing-images/auto-changing-images.component';
import { Title, Meta } from '@angular/platform-browser';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';



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
    MatDialogModule
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private hasModalBeenOpened = false;
  constructor(
    private dialog: MatDialog,
    private titleService: Title, 
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    private overlayContainer: OverlayContainer
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
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(): void {
  //   const section6 = document.getElementById('s6');
  //   if (section6) {
  //     const sectionTop = section6.getBoundingClientRect().top;
  //     const scrollPosition = window.pageYOffset + window.innerHeight;
  
  //     // Check if section 4 is visible and the modal has not been opened yet
  //     if (sectionTop <= scrollPosition && !this.hasModalBeenOpened) {
  //       this.openContactUsModal();
  //     }
  //   }
  // }
  
  

  // openContactUsModal(): void {
  //   if (!this.hasModalBeenOpened) {
  //     this.dialog.open(ContactUsComponent, {
  //       width: '300px',
  //       data: { isModal: true },
  //       position: { bottom: '0px', right: '0px' },
  //       panelClass: ['custom-dialog-container', 'custom-overlay-pane']
  //     });
      
  //     this.hasModalBeenOpened = true;  // Set the flag to true after opening the modal
  //   }
  // }

  openContactModal(): void {
    // Force scroll on body
    document.body.style.overflow = 'auto';
  
    const dialogRef = this.dialog.open(ContactUsComponent, {
      width: '300px',
      data: { isModal: true },
      position: { bottom: '0px', right: '0px' },
      panelClass: ['custom-dialog-container', 'custom-overlay-pane'],
    });
  
    dialogRef.afterClosed().subscribe(() => {
      // Reset overflow when modal closes
      document.body.style.overflow = 'hidden';
    });
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
