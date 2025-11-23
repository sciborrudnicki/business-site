import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, input, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators }  from '@angular/forms';

// PrimeNG Modules.
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

// Custom Components.
import { SectionHeader } from "../section-header/section-header";
import { Page } from '../page/page';
import { UiContainerModule } from '../container/ui-container.module';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // PrimeNG Modules.
    ButtonModule,
    InputTextModule,
    TextareaModule,

    // Custom Components.
    UiContainerModule,
    SectionHeader,
    Page
],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class Contact {
  public contactForm!: FormGroup;

  public description = input('Get in touch for questions, collaborations, or consultations.');
  public icon = input('pi pi-envelope');
  public title = input('Contact Me');

  public header = {
    description: this.description,
    icon: this.icon,
    title: this.title,
  };

  public isBrowser: boolean;

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);  // Check if browser

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Contact form submitted:', this.contactForm.value);
      // Add logic to send form data to backend if needed
      alert('Message sent successfully!');
      this.contactForm.reset();
    }
  }
}
