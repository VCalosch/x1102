import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoGeneralComponent } from './encargado-general.component';

describe('EncargadoGeneralComponent', () => {
  let component: EncargadoGeneralComponent;
  let fixture: ComponentFixture<EncargadoGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncargadoGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncargadoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
