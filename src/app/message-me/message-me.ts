import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Button } from '../button/button';


@Component({
  selector: 'app-message-me',
  standalone: true,
  imports: [
    Button,
    ReactiveFormsModule,
    TextareaModule,
    // ButtonModule,
    MessageModule,
    ToastModule
  ],
  templateUrl: './message-me.html',
  styleUrls: ['./message-me.scss'],
})
export class MessageMe {
  public messageMeForm: FormGroup;
  messageService = inject(MessageService);
  formSubmitted: boolean = false;

  constructor() {
    this.messageMeForm = new FormGroup({
      message: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
      this.formSubmitted = true;
      if (this.messageMeForm.valid) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form is submitted', life: 3000 });
          this.messageMeForm.reset();
          this.formSubmitted = false;
      }
  }

  isInvalid(controlName: string) {
      const control = this.messageMeForm.get(controlName);
      return control?.invalid && (control.touched || this.formSubmitted);
  }
}
