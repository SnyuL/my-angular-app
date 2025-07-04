import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2ComponentComponent } from './child2-component';

describe('Child2ComponentComponent', () => {
  let component: Child2ComponentComponent;
  let fixture: ComponentFixture<Child2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child2ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
