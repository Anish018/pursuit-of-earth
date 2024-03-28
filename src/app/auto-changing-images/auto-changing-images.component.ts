import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auto-changing-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-changing-images.component.html',
  styleUrl: './auto-changing-images.component.scss'
})
export class AutoChangingImagesComponent  implements OnInit, OnDestroy {
  images: string[] = [
    '../../assets/images/hero-bg1.jpg',
    '../../assets/images/hero-bg2.jpg',
    '../../assets/images/hero-bg3.jpg',
  ];
  currentImageIndex = 0;
  private imgChangeSub?: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const imgTimer = timer(0, 5000);
      this.imgChangeSub = imgTimer.subscribe(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      });
    }
  }

  ngOnDestroy(): void {
    this.imgChangeSub?.unsubscribe();
  }
}


