import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPhotoComponent } from './pg-photo.component';

describe('PgPhotoComponent', () => {
  let component: PgPhotoComponent;
  let fixture: ComponentFixture<PgPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgPhotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
