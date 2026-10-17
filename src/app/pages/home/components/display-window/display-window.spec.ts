import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayWindow } from './display-window';

describe('DisplayWindow', () => {
  let component: DisplayWindow;
  let fixture: ComponentFixture<DisplayWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayWindow],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayWindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
