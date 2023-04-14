import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTileComponent } from './module-tile.component';

describe('ModuleTileComponent', () => {
  let component: ModuleTileComponent;
  let fixture: ComponentFixture<ModuleTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
