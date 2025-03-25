import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailCodeComponent } from './trail-code.component';

describe('TrailCodeComponent', () => {
  let component: TrailCodeComponent;
  let fixture: ComponentFixture<TrailCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrailCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrailCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
