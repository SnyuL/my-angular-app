import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1ComponentComponent } from './child1-component';

describe('Child1ComponentComponent', () => {
  let component: Child1ComponentComponent;
  let fixture: ComponentFixture<Child1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1ComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
