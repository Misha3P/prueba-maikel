import { Activity, Evento, Registration, User } from "../models/models";

// Datos de ejemplo
export const events: Evento[] = [
    {
        EventId: '1',
        Title: 'Conferencia de Tecnología',
        Description: 'Una conferencia sobre las últimas tendencias en tecnología.',
        StartDate: new Date('2024-09-10'),
        EndDate: new Date('2024-09-12'),
        Location: 'Centro de Convenciones',
        OrganizerId: 'user1'
    },
    {
        EventId: '2',
        Title: 'Hackathon de Innovación',
        Description: 'Un evento para desarrollar nuevas ideas y tecnologías en 48 horas.',
        StartDate: new Date('2024-10-01'),
        EndDate: new Date('2024-10-03'),
        Location: 'Auditorio Principal',
        OrganizerId: 'user2'
    },
    {
        EventId: '3',
        Title: 'Taller de Diseño UX/UI',
        Description: 'Un taller para aprender las mejores prácticas en diseño UX/UI.',
        StartDate: new Date('2024-11-15'),
        EndDate: new Date('2024-11-16'),
        Location: 'Sala de Talleres',
        OrganizerId: 'user3'
    }
];

export const users: User[] = [
    {
        UserId: 'user1',
        Username: 'johndoe',
        Email: 'john.doe@example.com'
    },
    {
        UserId: 'user2',
        Username: 'janedoe',
        Email: 'jane.doe@example.com'
    },
    {
        UserId: 'user3',
        Username: 'samsmith',
        Email: 'sam.smith@example.com'
    },
    {
        UserId: 'user4',
        Username: 'emilyjones',
        Email: 'emily.jones@example.com'
    }
];

export const registrations: Registration[] = [
    {
        RegistrationId: 'reg1',
        EventId: '1',
        UserId: 'user1',
        RegistrationDate: new Date('2024-08-25'),
        Status: 'confirmado'
    },
    {
        RegistrationId: 'reg2',
        EventId: '2',
        UserId: 'user2',
        RegistrationDate: new Date('2024-09-01'),
        Status: 'confirmado'
    },
    {
        RegistrationId: 'reg3',
        EventId: '3',
        UserId: 'user3',
        RegistrationDate: new Date('2024-10-01'),
        Status: 'pendiente'
    },
    {
        RegistrationId: 'reg4',
        EventId: '1',
        UserId: 'user4',
        RegistrationDate: new Date('2024-08-30'),
        Status: 'confirmado'
    }
];

export const activities: Activity[] = [
    {
        ActivityId: 'act1',
        EventId: '1',
        Title: 'Keynote Speaker',
        Description: 'Presentación del orador principal.',
        Date: new Date('2024-09-10'),
        StartTime: '09:00',
        EndTime: '10:00'
    },
    {
        ActivityId: 'act2',
        EventId: '2',
        Title: 'Sesión de Introducción',
        Description: 'Introducción al hackathon y explicación de las reglas.',
        Date: new Date('2024-10-01'),
        StartTime: '10:00',
        EndTime: '11:00'
    },
    {
        ActivityId: 'act3',
        EventId: '2',
        Title: 'Presentaciones Finales',
        Description: 'Presentación de los proyectos desarrollados durante el hackathon.',
        Date: new Date('2024-10-03'),
        StartTime: '15:00',
        EndTime: '17:00'
    },
    {
        ActivityId: 'act4',
        EventId: '3',
        Title: 'Introducción al Diseño UX/UI',
        Description: 'Introducción a los conceptos básicos de diseño UX/UI.',
        Date: new Date('2024-11-15'),
        StartTime: '09:00',
        EndTime: '12:00'
    },
    {
        ActivityId: 'act5',
        EventId: '3',
        Title: 'Taller Práctico',
        Description: 'Ejercicios prácticos para aplicar los conceptos aprendidos.',
        Date: new Date('2024-11-15'),
        StartTime: '13:00',
        EndTime: '16:00'
    }
];
