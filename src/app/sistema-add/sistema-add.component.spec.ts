import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaAddComponent } from './sistema-add.component';

describe('SistemaAddComponent', () => {
  let component: SistemaAddComponent;
  let fixture: ComponentFixture<SistemaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
