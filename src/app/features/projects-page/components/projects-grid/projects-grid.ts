import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-grid',
  imports: [],
  templateUrl: './projects-grid.html',
  styleUrl: './projects-grid.scss',
})
export class ProjectsGrid {

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

}
