import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadecasosComponent } from './listadecasos.component';

describe('ListadecasosComponent', () => {
  let component: ListadecasosComponent;
  let fixture: ComponentFixture<ListadecasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadecasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadecasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
