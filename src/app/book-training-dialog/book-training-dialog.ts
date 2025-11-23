import { Component, input, model } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BookTrainingForm } from './book-training-form/book-training-form';

@Component({
  selector: 'app-book-training-dialog',
  imports: [
    ButtonModule,
    DialogModule,

    BookTrainingForm
  ],
  templateUrl: './book-training-dialog.html',
  styleUrl: './book-training-dialog.scss',
})
export class BookTrainingDialog {
  header = model('Book Training Session');
  visible = model<boolean>(false);

  closeDialog() {
    this.visible.set(false);
  }
}
