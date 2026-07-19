import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})

export class Hero {

  readonly name = 'Casimiro Aroca';

  readonly role = 'Java Backend Developer';

  readonly technologies = 'Spring Boot • Angular • Claude';

}

