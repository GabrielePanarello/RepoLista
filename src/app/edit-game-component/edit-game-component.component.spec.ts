import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGameComponentComponent } from './edit-game-component.component';

describe('EditGameComponentComponent', () => {
  let component: EditGameComponentComponent;
  let fixture: ComponentFixture<EditGameComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGameComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
