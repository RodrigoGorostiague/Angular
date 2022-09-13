import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeInteresaComponent } from './me-interesa.component';

describe('MeInteresaComponent', () => {
  let component: MeInteresaComponent;
  let fixture: ComponentFixture<MeInteresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeInteresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeInteresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
