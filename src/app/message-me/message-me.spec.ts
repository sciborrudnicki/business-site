import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageMe } from './message-me';

describe('MessageMe', () => {
  let component: MessageMe;
  let fixture: ComponentFixture<MessageMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageMe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
