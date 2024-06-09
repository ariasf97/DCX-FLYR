import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchflightPageComponent } from './page/searchflight.page/searchflight.page.component';
import { PreloadComponent } from './components/preload/preload.component';
import { PrimeNGConfig } from 'primeng/api';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchflightPageComponent, PreloadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  title = 'DCXAir-Harrison';
  constructor(
    private primengConfig: PrimeNGConfig,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.loadingService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
