import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilresponsableComponent } from './perfilresponsable.component';

describe('PerfilresponsableComponent', () => {
  let component: PerfilresponsableComponent;
  let fixture: ComponentFixture<PerfilresponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilresponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilresponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
