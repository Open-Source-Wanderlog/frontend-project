import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreLodgingComponent } from './explore-lodging.component';

describe('ExploreLodgingComponent', () => {
  let component: ExploreLodgingComponent;
  let fixture: ComponentFixture<ExploreLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreLodgingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
