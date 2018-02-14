import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesListComponentComponent } from './games-list-component.component';

describe('GamesListComponentComponent', () => {
  let component: GamesListComponentComponent;
  let fixture: ComponentFixture<GamesListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
