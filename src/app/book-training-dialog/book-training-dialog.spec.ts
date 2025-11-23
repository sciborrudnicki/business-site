import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTrainingDialog } from './book-training-dialog';

describe('BookTrainingDialog', () => {
  let component: BookTrainingDialog;
  let fixture: ComponentFixture<BookTrainingDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTrainingDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTrainingDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
