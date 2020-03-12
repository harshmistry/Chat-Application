import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageActionComponent } from './message-action.component';

describe('MessageActionComponent', () => {
  let component: MessageActionComponent;
  let fixture: ComponentFixture<MessageActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
