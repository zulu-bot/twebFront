import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminperfilComponent } from './adminperfil.component';

describe('AdminperfilComponent', () => {
  let component: AdminperfilComponent;
  let fixture: ComponentFixture<AdminperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
