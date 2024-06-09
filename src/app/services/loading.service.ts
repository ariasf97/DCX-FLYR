import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingSubject.asObservable();

  private setLoading(state: boolean) {
    this.loadingSubject.next(state);
  }
  openLoading() {
    this.setLoading(true);
  }
  closeLoading() {
    this.setLoading(false);
  }
}
