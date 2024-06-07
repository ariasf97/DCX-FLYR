import { Component } from '@angular/core';
import { FormDcxComponent } from '../../components/form-dcx/form-dcx.component';
import { ResultDcxComponent } from '../../components/result-dcx/result-dcx.component';

@Component({
  selector: 'app-searchflight',
  standalone: true,
  imports: [FormDcxComponent, ResultDcxComponent],
  templateUrl: './searchflight.page.component.html',
  styleUrl: './searchflight.page.component.css',
})
export class SearchflightPageComponent {}
