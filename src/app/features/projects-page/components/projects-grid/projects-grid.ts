import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-grid',
  imports: [],
  templateUrl: './projects-grid.html',
  styleUrl: './projects-grid.scss',
})
export class ProjectsGridComponent {

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
