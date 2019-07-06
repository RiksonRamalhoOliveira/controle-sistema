import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaGetComponent } from './sistema-get.component';

describe('SistemaGetComponent', () => {
  let component: SistemaGetComponent;
  let fixture: ComponentFixture<SistemaGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
