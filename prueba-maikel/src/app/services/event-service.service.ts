import { Injectable } from '@angular/core';
import { Evento } from '../models/models';
import { events } from '../data/database';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  getAllEvents(): Evento[] {
    return events;
  }

  getEventById(eventId: string): Evento | undefined {
    return events.find(event => event.EventId === eventId);
  }

  createEvent(event: Evento): void {
    events.push(event);
  }

  updateEvent(eventId: string, updatedEvent: Partial<Evento>): void {
    const index = events.findIndex(event => event.EventId === eventId);
    if (index !== -1) {
      events[index] = { ...events[index], ...updatedEvent };
    }
  }

  deleteEvent(eventId: string): void {
    const index = events.findIndex(event => event.EventId === eventId);
    if (index !== -1) {
      events.splice(index, 1);
    }
  }
}