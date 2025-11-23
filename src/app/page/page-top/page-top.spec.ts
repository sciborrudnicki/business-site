import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTop } from './page-top';

describe('PageTop', () => {
  let component: PageTop;
  let fixture: ComponentFixture<PageTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
