import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CholaComponent } from './chola.component';

describe('CholaComponent', () => {
  let component: CholaComponent;
  let fixture: ComponentFixture<CholaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CholaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CholaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
