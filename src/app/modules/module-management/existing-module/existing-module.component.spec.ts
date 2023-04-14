import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingModuleComponent } from './existing-module.component';

describe('ExistingModuleComponent', () => {
  let component: ExistingModuleComponent;
  let fixture: ComponentFixture<ExistingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
