import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpNavbarComponent } from './cp-navbar.component';

describe('CpNavbarComponent', () => {
  let component: CpNavbarComponent;
  let fixture: ComponentFixture<CpNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpNavbarComponent]
    });
    fixture = TestBed.createComponent(CpNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
