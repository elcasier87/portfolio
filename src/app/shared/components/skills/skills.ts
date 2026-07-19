import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
  {
    icon: '☕',
    title: 'Java',
    description: 'Desarrollo de aplicaciones backend orientadas a objetos.'
  },
  {
    icon: '🍃',
    title: 'Spring Boot',
    description: 'Creación de APIs REST, arquitectura por capas e integración de servicios.'
  },
  {
    icon: '🅰️',
    title: 'Angular',
    description: 'Desarrollo de interfaces SPA con componentes reutilizables.'
  },
  {
    icon: '🛢️',
    title: 'MySQL',
    description: 'Modelado y gestión de bases de datos relacionales.'
  },
  {
    icon: '🌱',
    title: 'Git',
    description: 'Control de versiones y trabajo colaborativo con GitHub.'
  },
  {
    icon: '🤖',
    title: 'IA Generativa',
    description: 'Integración de modelos de IA mediante APIs como Claude.'
  }
  ];

}
