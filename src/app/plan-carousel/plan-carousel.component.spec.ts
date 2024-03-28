import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCarouselComponent } from './plan-carousel.component';

describe('PlanCarouselComponent', () => {
  let component: PlanCarouselComponent;
  let fixture: ComponentFixture<PlanCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
