import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsumosComponent } from './edit-insumos.component';

describe('EditInsumosComponent', () => {
  let component: EditInsumosComponent;
  let fixture: ComponentFixture<EditInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsumosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
