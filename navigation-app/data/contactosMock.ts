export type Contacto = {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
};

export const CONTACTOS_MOCK: Contacto[] = [
  { id: '1', nombre: 'Ana García',       telefono: '172-0101', email: 'ana.garcia@mail.com'       },
  { id: '2', nombre: 'Carlos López',     telefono: '173-0102', email: 'carlos.lopez@mail.com'     },
  { id: '3', nombre: 'María Rodríguez',  telefono: '174-0103', email: 'maria.rodriguez@mail.com'  },
  { id: '4', nombre: 'Juan Martínez',    telefono: '175-0104', email: 'juan.martinez@mail.com'    },
  { id: '5', nombre: 'Sofía Hernández',  telefono: '176-0105', email: 'sofia.hernandez@mail.com'  },
  { id: '6', nombre: 'Pedro Sánchez',    telefono: '177-0106', email: 'pedro.sanchez@mail.com'    },
  { id: '7', nombre: 'Laura Torres',     telefono: '172-0107', email: 'laura.torres@mail.com'     },
  { id: '8', nombre: 'Diego Ramírez',    telefono: '172-0108', email: 'diego.ramirez@mail.com'    },
];
