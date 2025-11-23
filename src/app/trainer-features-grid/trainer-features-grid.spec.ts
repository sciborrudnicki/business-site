import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerFeaturesGrid } from './trainer-features-grid';

describe('TrainerFeaturesGrid', () => {
  let component: TrainerFeaturesGrid;
  let fixture: ComponentFixture<TrainerFeaturesGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerFeaturesGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerFeaturesGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
