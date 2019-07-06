import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoUpdateComponent } from './instituicao-update.component';

describe('InstituicaoUpdateComponent', () => {
  let component: InstituicaoUpdateComponent;
  let fixture: ComponentFixture<InstituicaoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstituicaoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
