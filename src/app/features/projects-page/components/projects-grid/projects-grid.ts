import { Component } from '@angular/core';
import { UmamiService } from '../../../../core/services/umami.service';

@Component({
  selector: 'app-projects-grid',
  imports: [],
  templateUrl: './projects-grid.html',
  styleUrl: './projects-grid.scss',
})
export class ProjectsGridComponent {

  constructor(private umami: UmamiService) {}

  filters = [
    'Todos',
    'Web',
    'Backend',
    'Móvil',
    'Herramientas'
  ];

  activeFilter = 'Todos';

  selectFilter(filter: string): void {
    this.activeFilter = filter;
  }

  trackGithub(project: string): void {
  this.umami.track(`${project} GitHub`);
}

}
