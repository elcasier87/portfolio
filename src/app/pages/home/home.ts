import { Component } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { FeaturedProject } from '../../components/featured-project/featured-project';
import { About } from '../../components/about/about';
import { Skills } from '../../components/skills/skills';
import { Contact } from "../../components/contact/contact";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, FeaturedProject, About, Skills, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
}
