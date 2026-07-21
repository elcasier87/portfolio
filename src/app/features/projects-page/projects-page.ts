import { Component } from '@angular/core';

import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    ProjectShowcaseComponent,
    ProjectsGridComponent
  ],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPageComponent {}
