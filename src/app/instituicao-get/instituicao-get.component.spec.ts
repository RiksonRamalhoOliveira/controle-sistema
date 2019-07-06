import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoGetComponent } from './instituicao-get.component';

describe('InstituicaoGetComponent', () => {
  let component: InstituicaoGetComponent;
  let fixture: ComponentFixture<InstituicaoGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituicaoGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
