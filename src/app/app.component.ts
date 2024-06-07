import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchflightPageComponent } from './page/searchflight.page/searchflight.page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchflightPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DCXAir-Harrison';
}
