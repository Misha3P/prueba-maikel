import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Activity, Evento, Registration, User } from 'src/app/models/models';
import { ActivityService } from 'src/app/services/activity-service.service';
import { EventService } from 'src/app/services/event-service.service';
import { RegistrationService } from 'src/app/services/registration-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-event-details-component',
  templateUrl: './event-details-component.component.html',
  styleUrls: ['./event-details-component.component.scss']
})
export class EventDetailsComponent implements OnInit {
  @Input() event!: Evento;
  activities: Activity[] = [];
  registrations: Registration[] = [];
  users: User[] = [];
  currentUserId: string = 'user1'; // Cambiar según el usuario actual

  constructor(
    public activeModal: NgbActiveModal,
    private eventService: EventService,
    private userService: UserService,
    private registrationService: RegistrationService,
    private activityService: ActivityService
  ) { }

  ngOnInit(): void {
    if (this.event) {
      this.activities = this.activityService.getAllActivities().filter(a => a.EventId === this.event.EventId);
      this.registrations = this.registrationService.getAllRegistrations().filter(r => r.EventId === this.event.EventId);
      this.users = this.registrations.map(r => this.userService.getUserById(r.UserId)).filter(user => user !== undefined) as User[];
    }
  }

  deleteEvent(): void {
    if (this.event) {
      this.eventService.deleteEvent(this.event.EventId);
      this.activeModal.close(); // Cierra el modal
    }
  }

  updateEvent(): void {
    // Implementar lógica de actualización del evento
  }
}