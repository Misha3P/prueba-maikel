import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from 'src/app/models/models';
import { EventService } from 'src/app/services/event-service.service';
import { EventDetailsComponent } from '../event-details-component/event-details-component.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  selector: 'app-event-list-component',
  templateUrl: './event-list-component.component.html',
  styleUrls: ['./event-list-component.component.scss']
})
export class EventListComponent {
  events: Evento[] = [];

  constructor(private eventService: EventService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.events = this.eventService.getAllEvents();
  }

  openEventDetailsModal(eventId: string): void {
    const event = this.eventService.getEventById(eventId);
    if (event) {
      const modalRef = this.modalService.open(EventDetailsComponent, { size: 'lg' });
      modalRef.componentInstance.event = event;
    }
  }

  openEventFormModal(eventId?: string): void {
    const event = eventId ? this.eventService.getEventById(eventId) : undefined;
    const modalRef = this.modalService.open(EventFormComponent, { size: 'lg' });
    modalRef.componentInstance.event = event;
  }
}