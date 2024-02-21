import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgGtleagueComponent } from './pg-gtleague.component';

describe('PgGtleagueComponent', () => {
  let component: PgGtleagueComponent;
  let fixture: ComponentFixture<PgGtleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgGtleagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgGtleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
