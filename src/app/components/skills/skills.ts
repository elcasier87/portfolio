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
      description: 'Desarrollo de APIs REST y lógica de negocio.'
    },
    {
      icon: '🍃',
      title: 'Spring Boot',
      description: 'Arquitectura backend y servicios REST.'
    },
    {
      icon: '🅰️',
      title: 'Angular',
      description: 'Interfaces SPA modernas y componentes reutilizables.'
    },
    {
      icon: '🤖',
      title: 'Claude API',
      description: 'Integración de IA para reconocimiento y valoración de vinilos.'
    },
    {
      icon: '🛢️',
      title: 'MySQL',
      description: 'Diseño y gestión de bases de datos relacionales.'
    },
    {
      icon: '🌿',
      title: 'Git & GitHub',
      description: 'Control de versiones y despliegue continuo.'
    }
  ];

}
