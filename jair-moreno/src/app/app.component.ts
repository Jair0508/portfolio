import { Component, ViewEncapsulation } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { TechnologiesComponent } from "./technologies/technologies.component";

@Component({
  selector: 'app-root',
  imports: [AboutMeComponent, TechnologiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
}
