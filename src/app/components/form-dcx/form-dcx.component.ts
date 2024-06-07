import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
  ],
  templateUrl: './form-dcx.component.html',
  styleUrl: './form-dcx.component.css',
})
export class FormDcxComponent implements OnInit {
  formBuilder: FormBuilder = inject(FormBuilder);
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
      { name: 'Dollar', code: 'USD' },
      { name: 'Peso Colombiano', code: 'COP' },
    ];
  }
}
