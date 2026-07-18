import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { FeaturedProject } from '../../components/featured-project/featured-project';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, FeaturedProject],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  skills: Skill[] = [
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
