import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAttractionsComponent } from './explore-attractions.component';

describe('ExploreAttractionsComponent', () => {
  let component: ExploreAttractionsComponent;
  let fixture: ComponentFixture<ExploreAttractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreAttractionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
