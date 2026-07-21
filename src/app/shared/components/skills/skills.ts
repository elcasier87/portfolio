import { Component } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-skills',
  imports: [Icon],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  skills = [

  {
    icon:'java',
    title:'Java',
    description:'Desarrollo de aplicaciones backend orientadas a objetos.'
  },

  {
    icon:'springboot',
    title:'Spring Boot',
    description:'Creación de APIs REST, arquitectura por capas e integración de servicios.'
  },

  {
    icon: 'angular',
    title: 'Angular',
    description: 'Desarrollo de interfaces SPA con componentes reutilizables.'
  },

  {
    icon:'mysql',
    title:'MySQL',
    description:'Modelado y gestión de bases de datos relacionales.'
  },

  {
    icon:'git',
    title:'Git',
    description:'Control de versiones y trabajo colaborativo con GitHub.'
  },

  {
    icon:'anthropic',
    title:'IA Generativa',
    description:'Integración de modelos de IA mediante APIs como Claude.'
  }

];

}
