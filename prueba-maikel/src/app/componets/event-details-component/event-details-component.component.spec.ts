import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetailsComponentComponent } from './event-details-component.component';

describe('EventDetailsComponentComponent', () => {
  let component: EventDetailsComponentComponent;
  let fixture: ComponentFixture<EventDetailsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDetailsComponentComponent]
    });
    fixture = TestBed.createComponent(EventDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
