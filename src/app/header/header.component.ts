import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mobileMenuOpen: boolean = false;
  activeSection: string = '';

  dropdownStates: {[key: string]: boolean} = {};
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      if (this.activeSection) {
        this.scrollToActiveSection();
      }
    });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll, true);
    }
  }

  ngAfterViewInit() {
    // Wait for the view to be initialized to ensure all elements are rendered.
    setTimeout(() => {
      this.updateActiveSectionOnScroll();
    }, 0);
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll, true);
    }
  }


  onScroll = (): void => {
    this.updateActiveSectionOnScroll();
  };
  updateActiveSectionOnScroll(): void {
    // Ensure code runs only in the browser
    if (isPlatformBrowser(this.platformId)) {
      const sections = ['s1', 'about-us', 's4', 's6', 'contact-us'];
      let currentSection = '';
  
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        const scrollPosition = window.scrollY;
  
        if (section) {
          const sectionTop = section.offsetTop - 200; // Adjust so the section becomes active 200px before
          const sectionHeight = section.offsetHeight;
  
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = sectionId;
          }
        }
      });
  
      this.activeSection = currentSection;
    }
  }
  

  toggleDropdown(event: Event, dropdownId: string) {
    event.stopPropagation(); // Stop the click event from propagating to parent elements
    this.dropdownStates[dropdownId] = !this.dropdownStates[dropdownId];

    // Close other dropdowns if one is opened
    for (let key in this.dropdownStates) {
      if (key !== dropdownId) {
        this.dropdownStates[key] = false;
      }
    }
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.activeSection = sectionId;

    if (this.router.url !== '/') {
      // If not on the home page, navigate there first
      this.router.navigateByUrl('/').then(() => {
        // Navigation to home page is complete, now wait for Angular to detect navigation end and scroll
        this.closeMobileMenu();

      });
    } else {
      // Already on the home page, scroll immediately
      this.scrollToActiveSection();
      
    }
  }

  scrollToActiveSection() {
    if (isPlatformBrowser(this.platformId)) {
      // Ensure this runs only in the browser
      setTimeout(() => {
        const section = document.getElementById(this.activeSection);
                this.closeMobileMenu();

        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 100; // Adjust 100px offset as needed
          window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
          });
        }
      }, 0); // Adjust this delay based on your page's loading behavior
    }
  }
  
  navigateTo(path: string) {
    this.activeSection = path; // Set the active section/path
    this.router.navigateByUrl(`/${path}`).then(() => {
      // Check if running in browser
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
    // Add a method to determine if a section/page is active
    isActive(sectionOrPath: string): boolean {
      // If on a specific page, ensure it remains active regardless of scroll
      if (this.router.url.slice(1) === sectionOrPath) {
        return true;
      }
  
      // For in-page navigation, maintain existing scroll-based logic
      return this.activeSection === sectionOrPath;
    }
}
