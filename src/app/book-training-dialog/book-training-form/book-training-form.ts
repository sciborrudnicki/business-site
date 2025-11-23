import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DatePicker } from 'primeng/datepicker';
// import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
// Custom Modules
import { Form } from "../../form/form";
import { FormTemplateDirective } from '../../form/form-template.directive';

@Component({
  selector: 'app-book-training-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // PrimeNG
    ButtonModule,
    CardModule,
    DatePicker,
    InputTextModule,
    MultiSelectModule,
    TextareaModule,
    InputNumberModule,
    CheckboxModule,

    // Custom Modules
    Form,
    FormTemplateDirective
],
  templateUrl: './book-training-form.html',
  styleUrls: ['./book-training-form.scss'],
})
export class BookTrainingForm {
  public bookingForm: FormGroup;

  public trainingTypes = [
    { label: 'Angular Basics', value: 'basics' },
    { label: 'Advanced Angular', value: 'advanced' },
    { label: 'Performance Optimization', value: 'performance' },
    { label: 'Custom Training', value: 'custom' },
  ];

  public experienceLevels = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' },
  ];
 
  public timeSlots = [
    { label: 'Morning (9 AM - 12 PM)', value: 'morning' },
    { label: 'Afternoon (1 PM - 4 PM)', value: 'afternoon' },
    { label: 'Evening (5 PM - 8 PM)', value: 'evening' },
  ];

  isBrowser: boolean;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);  // Check if browser
    this.bookingForm = this.fb.group({
      acceptTerms: [false, Validators.requiredTrue],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      experienceLevel: [null, Validators.required],
      trainingType: [null, Validators.required],
      preferredDate: [null, Validators.required],
      preferredTime: [null, Validators.required],
      participants: [1, [Validators.required, Validators.min(1)]],
      message: [''],
      additionalNotes: [''],
    });
  }

  public onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Booking Data:', this.bookingForm.value);
      // TODO: Send to backend API or service
      alert('Booking submitted!');  // Placeholder
    } else {
      alert('Please fill in all required fields.');
    }
  }
}