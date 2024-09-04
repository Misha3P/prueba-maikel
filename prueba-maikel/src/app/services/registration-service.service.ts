import { Injectable } from '@angular/core';
import { Registration } from '../models/models';
import { registrations } from '../data/database';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  getAllRegistrations(): Registration[] {
    return registrations;
  }

  getRegistrationById(registrationId: string): Registration | undefined {
    return registrations.find(registration => registration.RegistrationId === registrationId);
  }

  createRegistration(registration: Registration): void {
    registrations.push(registration);
  }

  updateRegistration(registrationId: string, updatedRegistration: Partial<Registration>): void {
    const index = registrations.findIndex(registration => registration.RegistrationId === registrationId);
    if (index !== -1) {
      registrations[index] = { ...registrations[index], ...updatedRegistration };
    }
  }

  deleteRegistration(registrationId: string): void {
    const index = registrations.findIndex(registration => registration.RegistrationId === registrationId);
    if (index !== -1) {
      registrations.splice(index, 1);
    }
  }
}
