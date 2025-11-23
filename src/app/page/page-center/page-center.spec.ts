import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCenter } from './page-center';

describe('PageCenter', () => {
  let component: PageCenter;
  let fixture: ComponentFixture<PageCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCenter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
