import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Evento } from 'src/app/models/models';
import { EventService } from 'src/app/services/event-service.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input() event: Evento | undefined;
  isEditMode: boolean = false;
  newEvent: Evento = {
    EventId: '',
    Title: '',
    Description: '',
    StartDate: '',
    EndDate: '',
    Location: '',
    OrganizerId: 'user1' // Cambiar según el usuario actual
  };

  constructor(public activeModal: NgbActiveModal, private eventService: EventService) { }

  ngOnInit(): void {
    if (this.event) {
      this.isEditMode = true;
      this.newEvent = { ...this.event };
    }
  }

  saveEvent(): void {
    if (this.isEditMode && this.newEvent.EventId) {
      this.eventService.updateEvent(this.newEvent.EventId, this.newEvent);
    } else {
      this.newEvent.EventId = this.generateEventId(); // Implementar lógica para generar un nuevo ID
      this.eventService.createEvent(this.newEvent);
    }
    this.activeModal.close(); // Cierra el modal
  }

  private generateEventId(): string {
    return Math.random().toString(36).substr(2, 9); // Genera un ID aleatorio
  }
}