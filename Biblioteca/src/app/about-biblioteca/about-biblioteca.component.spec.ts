import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBibliotecaComponent } from './about-biblioteca.component';

describe('AboutBibliotecaComponent', () => {
  let component: AboutBibliotecaComponent;
  let fixture: ComponentFixture<AboutBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBibliotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
