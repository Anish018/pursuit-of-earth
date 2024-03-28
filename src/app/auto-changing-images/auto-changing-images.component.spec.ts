import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoChangingImagesComponent } from './auto-changing-images.component';

describe('AutoChangingImagesComponent', () => {
  let component: AutoChangingImagesComponent;
  let fixture: ComponentFixture<AutoChangingImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoChangingImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoChangingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
