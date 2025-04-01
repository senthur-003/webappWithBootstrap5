import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertopComponent } from './headertop.component';

describe('HeadertopComponent', () => {
  let component: HeadertopComponent;
  let fixture: ComponentFixture<HeadertopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadertopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadertopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
