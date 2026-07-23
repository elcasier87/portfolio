import { Routes } from '@angular/router';

import { MainLayoutComponent } from './core/layouts/main-layout/main-layout';

import { HomeComponent } from './features/home/home';
import { AboutPageComponent } from './features/about-page/about-page';
import { ProjectsPageComponent } from './features/projects-page/projects-page';
import { ContactPageComponent } from './features/contact-page/contact-page';
import { NotFoundPageComponent } from './features/not-found-page/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Inicio'
      },
      {
        path: 'about',
        component: AboutPageComponent,
        title: 'Sobre mí'
      },
      {
        path: 'projects',
        component: ProjectsPageComponent,
        title: 'Proyectos'
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        title: 'Contacto'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: '404'
  }
];
