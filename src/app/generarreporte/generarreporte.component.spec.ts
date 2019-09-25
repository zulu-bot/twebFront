import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarreporteComponent } from './generarreporte.component';

describe('GenerarreporteComponent', () => {
  let component: GenerarreporteComponent;
  let fixture: ComponentFixture<GenerarreporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarreporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarreporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
