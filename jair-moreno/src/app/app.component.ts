import { Component } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ExperienceComponent } from "./experience/experience.component";

@Component({
  selector: 'app-root',
  imports: [
    AboutMeComponent,
    TechnologiesComponent,
    NavbarComponent,
    ExperienceComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
