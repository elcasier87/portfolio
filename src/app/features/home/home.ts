import { Component } from '@angular/core';
import { Hero } from '../../shared/components/hero/hero';
import { FeaturedProject } from '../../shared/components/featured-project/featured-project';

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedProject],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
