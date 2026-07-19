import { Routes } from '@angular/router';

import { MainLayout } from './core/layouts/main-layout/main-layout';

import { Home } from './features/home/home';
import { AboutPage } from './features/about-page/about-page';
import { ProjectsPage } from './features/projects-page/projects-page';
import { BlogPage } from './features/blog-page/blog-page';
import { ContactPage } from './features/contact-page/contact-page';
import { NotFoundPage } from './features/not-found-page/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'about',
        component: AboutPage
      },
      {
        path: 'projects',
        component: ProjectsPage
      },
      {
        path: 'blog',
        component: BlogPage
      },
      {
        path: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '**',
    component: NotFoundPage
  }
];
