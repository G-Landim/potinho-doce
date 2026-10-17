import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdButton } from './pd-button';

describe('PdButton', () => {
  let component: PdButton;
  let fixture: ComponentFixture<PdButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdButton],
    }).compileComponents();

    fixture = TestBed.createComponent(PdButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
