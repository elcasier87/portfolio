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
        title: 'elcasier | Portfolio'
      },
      {
        path: 'about',
        component: AboutPageComponent,
        title: 'elcasier | Sobre mí'
      },
      {
        path: 'projects',
        component: ProjectsPageComponent,
        title: 'elcasier | Proyectos'
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        title: 'elcasier | Contacto'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'elcasier | Página no encontrada'
  }
];
