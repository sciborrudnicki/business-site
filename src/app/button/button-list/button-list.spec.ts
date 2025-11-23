import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonList } from './button-list';

describe('ButtonList', () => {
  let component: ButtonList;
  let fixture: ComponentFixture<ButtonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
