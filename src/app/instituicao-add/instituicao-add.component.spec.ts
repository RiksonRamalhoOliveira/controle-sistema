import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoAddComponent } from './instituicao-add.component';

describe('InstituicaoAddComponent', () => {
  let component: InstituicaoAddComponent;
  let fixture: ComponentFixture<InstituicaoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituicaoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
