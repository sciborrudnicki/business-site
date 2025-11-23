import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDescription } from './business-description';

describe('BusinessDescription', () => {
  let component: BusinessDescription;
  let fixture: ComponentFixture<BusinessDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
