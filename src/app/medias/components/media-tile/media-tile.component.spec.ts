import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { MediaTileComponent } from './media-tile.component';

describe('MediaTileComponent', () => {
  let component: MediaTileComponent;
  let fixture: ComponentFixture<MediaTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaTileComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, MatMenuModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
