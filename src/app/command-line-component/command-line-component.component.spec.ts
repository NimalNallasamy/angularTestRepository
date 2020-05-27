import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandLineComponentComponent } from './command-line-component.component';

describe('CommandLineComponentComponent', () => {
  let component: CommandLineComponentComponent;
  let fixture: ComponentFixture<CommandLineComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandLineComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandLineComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
