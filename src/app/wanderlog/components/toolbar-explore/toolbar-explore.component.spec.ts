import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarExploreComponent } from './toolbar-explore.component';

describe('ToolbarExploreComponent', () => {
  let component: ToolbarExploreComponent;
  let fixture: ComponentFixture<ToolbarExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarExploreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
