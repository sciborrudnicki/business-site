import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBottom } from './page-bottom';

describe('PageBottom', () => {
  let component: PageBottom;
  let fixture: ComponentFixture<PageBottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBottom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
