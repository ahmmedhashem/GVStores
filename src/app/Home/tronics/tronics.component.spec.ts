import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TronicsComponent } from './tronics.component';

describe('TronicsComponent', () => {
  let component: TronicsComponent;
  let fixture: ComponentFixture<TronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TronicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
