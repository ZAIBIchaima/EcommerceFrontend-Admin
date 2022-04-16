import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEmployeComponent } from './afficher-employe.component';

describe('AfficherEmployeComponent', () => {
  let component: AfficherEmployeComponent;
  let fixture: ComponentFixture<AfficherEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
