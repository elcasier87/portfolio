import { Component } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-project-showcase',
  imports: [],
  templateUrl: './project-showcase.html',
  styleUrl: './project-showcase.scss',
})
export class ProjectShowcase {

  selected = 0;

  features: Feature[] = [
    {
      title: 'Escanea',
      description: 'Haz una fotografía del vinilo y deja que la IA haga el resto.',
      image: 'scan.png'
    },
    {
      title: 'Identifica',
      description: 'La IA identifica automáticamente el disco encontrado.',
      image: 'identify.png'
    },
    {
      title: 'Valora',
      description: 'Consulta el precio actualizado del mercado.',
      image: 'value.png'
    },
    {
      title: 'Organiza',
      description: 'Guarda toda tu colección en un único lugar.',
      image: 'collection.png'
    },
    {
      title: 'Analiza',
      description: 'Consulta la evolución del precio a lo largo del tiempo.',
      image: 'history.png'
    }
  ];

  select(index: number): void {
    this.selected = index;
  }

}
