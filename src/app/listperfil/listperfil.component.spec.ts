import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListperfilComponent } from './listperfil.component';

describe('ListperfilComponent', () => {
  let component: ListperfilComponent;
  let fixture: ComponentFixture<ListperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
