import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Currency } from '../../interfaces/currency.interface';
import { SearchflightService } from '../../services/searchflight.service';
import { Journay } from '../../interfaces/response.interface';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-dcx',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    CardModule,
    SelectButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    ToastModule,
  ],
  templateUrl: './form-dcx.component.html',
  styleUrls: ['./form-dcx.component.css'],
  providers: [MessageService],
})
export class FormDcxComponent implements OnInit {
  messageService: MessageService = inject(MessageService);
  formBuilder: FormBuilder = inject(FormBuilder);
  @Output() journays = new EventEmitter<Journay[]>();
  searchflightService: SearchflightService = inject(SearchflightService);
  formDcx: FormGroup;
  typeflight: any[] = [
    { label: 'Oneway', value: 'oneway' },
    { label: 'Roundtrip', value: 'Roundtrip' },
  ];
  currency: Currency[] = [];
  constructor() {
    this.formDcx = this.formBuilder.group({
      origin: ['', [Validators.required]],
      destination: ['', Validators.required],
      typeflight: ['', Validators.required],
      selectCurrency: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.currency = [
      { name: 'Dollar', code: 0 },
      { name: 'Peso Colombiano', code: 1 },
      { name: 'Euro', code: 2 },
    ];
  }

  showWarn(message: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warning',
      detail: message,
    });
  }

  markAllFieldsAsTouched(): void {
    Object.keys(this.formDcx.controls).forEach((field) => {
      const control = this.formDcx.get(field);
      control?.markAsTouched();
    });
  }

  search() {
    if (this.formDcx.invalid) {
      this.markAllFieldsAsTouched();
      return;
    }
    const endpoint =
      this.formDcx.get('typeflight')?.value === 'oneway'
        ? 'GetFlightsByType-airports'
        : 'GetRoundtripFlights-airports';
    this.searchflightService
      .searchFlight(
        {
          currencyType: this.formDcx.get('selectCurrency')?.value.code,
          destination: this.formDcx.get('destination')?.value,
          origin: this.formDcx.get('origin')?.value,
        },
        endpoint
      )
      .subscribe({
        next: (response: any) => {
          if (response && response.length > 0) {
            this.journays.emit(response);
          } else {
            this.showWarn('No data found for the specified search criteria.');
          }
        },
        error: (error: any) => {
          console.error('Error:', error);
          this.showWarn('An error occurred while searching for flights.');
        },
      });
  }

  validateCampo(campo: string) {
    return this.formDcx.get(campo)?.invalid && this.formDcx.get(campo)?.touched;
  }
}
