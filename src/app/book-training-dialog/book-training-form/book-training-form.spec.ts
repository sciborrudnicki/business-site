import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTrainingForm } from './book-training-form';

describe('BookTraining', () => {
  let component: BookTrainingForm;
  let fixture: ComponentFixture<BookTrainingForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTrainingForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTrainingForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
