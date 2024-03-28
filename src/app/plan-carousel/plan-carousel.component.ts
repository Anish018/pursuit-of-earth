import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { debounceTime, fromEvent, Subscription } from 'rxjs';
@Component({
  selector: 'app-plan-carousel',
  standalone: true,
  imports: [MatIconModule, CommonModule], // Include MatIconModule here
  templateUrl: './plan-carousel.component.html',
  styleUrl: './plan-carousel.component.scss'
})
export class PlanCarouselComponent implements AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef<HTMLDivElement>;
  slidesCount = 0;
  activeIndex = 0;
  isManualNav = false; // Flag to indicate manual navigation
  private scrollEventSubscription!: Subscription; // Subscription to manage the scroll event

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.setupScrollListener();
    this.slidesCount = this.carousel.nativeElement.querySelectorAll('.slide').length;
    this.cdr.detectChanges();
  }

  private setupScrollListener() {
    this.ngZone.runOutsideAngular(() => {
      this.scrollEventSubscription = fromEvent(this.carousel.nativeElement, 'scroll')
        .pipe(debounceTime(10))
        .subscribe(() => {
          if (!this.isManualNav) {
            this.ngZone.run(() => {
              this.onScroll();
            });
          }
        });
    });
  }

  private onScroll() {
    window.requestAnimationFrame(() => {
      const scrollLeft = this.carousel.nativeElement.scrollLeft;
      const slideWidth = this.carousel.nativeElement.offsetWidth;
      const index = Math.round(scrollLeft / slideWidth);
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.cdr.markForCheck();
      }
    });
  }
  
  scrollLeft() {
    this.isManualNav = true;
    this.adjustActiveIndex(-1);
    this.scrollToActiveSlide();
  }

  scrollRight() {
    this.isManualNav = true;
    this.adjustActiveIndex(1);
    this.scrollToActiveSlide();
  }

  goToSlide(index: number) {
    this.isManualNav = true;
    this.activeIndex = index;
    this.scrollToActiveSlide();
  }

  private scrollToActiveSlide() {
    const slideWidth = this.carousel.nativeElement.offsetWidth;
    const offset = slideWidth * this.activeIndex;
    this.carousel.nativeElement.scrollTo({ left: offset, behavior: 'smooth' });

    setTimeout(() => {
      this.isManualNav = false;
    }, 350); // Adjust this duration based on your actual smooth scroll duration
  }

  private adjustActiveIndex(change: number) {
    const newIndex = this.activeIndex + change;
    if (newIndex < 0) {
      this.activeIndex = this.slidesCount - 1;
    } else if (newIndex >= this.slidesCount) {
      this.activeIndex = 0;
    } else {
      this.activeIndex = newIndex;
    }
  }

  ngOnDestroy() {
    if (this.scrollEventSubscription) {
      this.scrollEventSubscription.unsubscribe(); // Properly unsubscribe to prevent memory leaks
    }
  }

}
