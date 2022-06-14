import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftScenarioComponent } from './left-scenario.component';

describe('LeftScenarioComponent', () => {
  let component: LeftScenarioComponent;
  let fixture: ComponentFixture<LeftScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftScenarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
