import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailComponentComponent } from './game-detail-component.component';

describe('GameDetailComponentComponent', () => {
  let component: GameDetailComponentComponent;
  let fixture: ComponentFixture<GameDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
