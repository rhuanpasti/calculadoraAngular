import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinariaComponent } from './binaria.component';

describe('BinariaComponent', () => {
  let component: BinariaComponent;
  let fixture: ComponentFixture<BinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
