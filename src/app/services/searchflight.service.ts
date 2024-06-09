import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { Data, Journay } from '../interfaces/response.interface';
import { LoadingService } from './loading.service';
import { Filter } from '../interfaces/filter.interface';
// Asegúrate de importar el modelo correcto

@Injectable({
  providedIn: 'root',
})
export class SearchflightService {
  private http: HttpClient = inject(HttpClient);
  private loadingService: LoadingService = inject(LoadingService);
  API: string = 'https://localhost:7010/api/';

  searchFlight(filter: Filter, endpoint: string): Observable<Journay[]> {
    this.loadingService.openLoading();

    return this.http.post<any>(`${this.API}Flight/${endpoint}`, filter).pipe(
      map((response: Data) => {
        return response.data; // Ajusta según la estructura de tu respuesta
      }),
      catchError((err: any): Observable<Journay[]> => {
        console.error('Error fetching flight records:', err);
        return of([]);
      }),
      finalize(() => {
        setTimeout(() => {
          this.loadingService.closeLoading();
        }, 600);
      })
    );
  }
}
