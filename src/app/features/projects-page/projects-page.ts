import { Component } from '@angular/core';
import { ProjectShowcase } from './components/project-showcase/project-showcase';
import { ProjectsGrid } from './components/projects-grid/projects-grid';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectShowcase, ProjectsGrid],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {}
