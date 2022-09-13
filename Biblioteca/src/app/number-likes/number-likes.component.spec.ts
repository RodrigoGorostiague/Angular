import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLikesComponent } from './number-likes.component';

describe('NumberLikesComponent', () => {
  let component: NumberLikesComponent;
  let fixture: ComponentFixture<NumberLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberLikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
