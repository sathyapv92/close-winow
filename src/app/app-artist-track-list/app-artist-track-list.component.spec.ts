import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppArtistTrackListComponent } from './app-artist-track-list.component';

describe('AppArtistTrackListComponent', () => {
  let component: AppArtistTrackListComponent;
  let fixture: ComponentFixture<AppArtistTrackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppArtistTrackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppArtistTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
