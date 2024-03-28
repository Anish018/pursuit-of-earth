// accordion.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  accordionItems = [
    {
      header: 'SCHOOLS',
      content: [
        'Vibgyor High School - 350M',
        'Cambridge School - 1.1km'
      ]
    },
    {
      header: 'TECH PARK',
      content: [
        'Sigma Tech park - 3.2km',
        'Kalyani - 7.4km'
      ]
    },
    {
      header: 'HOSPITALS',
      content: [
        'Sahara Hospital - 250m',
        'Manipal Hospital - 3km'
      ]
    },
    {
      header: 'SUPERMARKET',
      content: [
        'The Central Shopping Mall - 1.1km',
        'Nexus Whitefield Mall - 3km'
      ]
    }
  ];


  // Tracks the index of the currently open item (-1 means all items are closed)
  openItemIndex: number = -1;

  toggleItem(index: number): void {
    this.openItemIndex = this.openItemIndex === index ? -1 : index;
  }

  isItemOpen(index: number): boolean {
    return this.openItemIndex === index;
  }
}
