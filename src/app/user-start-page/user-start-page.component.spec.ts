import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStartPageComponent } from './user-start-page.component';

describe('UserStartPageComponent', () => {
  let component: UserStartPageComponent;
  let fixture: ComponentFixture<UserStartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
