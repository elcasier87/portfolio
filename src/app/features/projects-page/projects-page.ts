import { Component } from '@angular/core';
import { ProjectShowcase } from './components/project-showcase/project-showcase';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectShowcase],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {}
