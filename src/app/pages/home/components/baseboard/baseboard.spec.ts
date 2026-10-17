import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Baseboard } from './baseboard';

describe('Baseboard', () => {
  let component: Baseboard;
  let fixture: ComponentFixture<Baseboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Baseboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Baseboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
