import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttrbuteComponent } from './add-attrbute.component';

describe('AddAttrbuteComponent', () => {
  let component: AddAttrbuteComponent;
  let fixture: ComponentFixture<AddAttrbuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAttrbuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttrbuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
