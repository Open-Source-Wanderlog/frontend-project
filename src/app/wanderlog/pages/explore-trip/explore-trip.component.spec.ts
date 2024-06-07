import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTripComponent } from './explore-trip.component';

describe('ExploreTripComponent', () => {
  let component: ExploreTripComponent;
  let fixture: ComponentFixture<ExploreTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreTripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
