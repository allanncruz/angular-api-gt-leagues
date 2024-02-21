import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgAdriactleagueComponent } from './pg-adriactleague.component';

describe('PgAdriactleagueComponent', () => {
  let component: PgAdriactleagueComponent;
  let fixture: ComponentFixture<PgAdriactleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgAdriactleagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgAdriactleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
