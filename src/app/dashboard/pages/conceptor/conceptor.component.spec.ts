import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptorComponent } from './conceptor.component';

describe('ConceptorComponent', () => {
  let component: ConceptorComponent;
  let fixture: ComponentFixture<ConceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
