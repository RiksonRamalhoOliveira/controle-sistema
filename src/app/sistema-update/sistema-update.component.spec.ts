import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaUpdateComponent } from './sistema-update.component';

describe('SistemaUpdateComponent', () => {
  let component: SistemaUpdateComponent;
  let fixture: ComponentFixture<SistemaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
