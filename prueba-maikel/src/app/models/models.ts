// Evento
export interface Evento {
    EventId: string; // UUID o ID único para el evento
    Title: string;   // Título del evento
    Description: string; // Descripción del evento
    StartDate: Date | string; // Fecha de inicio del evento
    EndDate: Date | string;   // Fecha de fin del evento
    Location: string; // Ubicación del evento
    OrganizerId: string; // ID del organizador (UserId)
}

// Usuario
export interface User {
    UserId: string;   // ID único del usuario
    Username: string; // Nombre de usuario
    Email: string;    // Correo electrónico
}

// Registro en Evento
export interface Registration {
    RegistrationId: string; // ID único del registro
    EventId: string; // ID del evento (EventId)
    UserId: string;  // ID del usuario que se registra (UserId)
    RegistrationDate: Date; // Fecha del registro
    Status: 'pendiente' | 'confirmado' | 'cancelado'; // Estado del registro
}

// Actividad en Evento
export interface Activity {
    ActivityId: string; // ID único de la actividad
    EventId: string;    // ID del evento al que pertenece (EventId)
    Title: string;      // Título de la actividad
    Description: string; // Descripción de la actividad
    Date: Date;         // Fecha de la actividad
    StartTime: string;  // Hora de inicio de la actividad (formato HH:MM)
    EndTime: string;    // Hora de fin de la actividad (formato HH:MM)
}
