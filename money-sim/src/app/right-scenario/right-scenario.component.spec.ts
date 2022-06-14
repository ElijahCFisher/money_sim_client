import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightScenarioComponent } from './right-scenario.component';

describe('RightScenarioComponent', () => {
  let component: RightScenarioComponent;
  let fixture: ComponentFixture<RightScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightScenarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
