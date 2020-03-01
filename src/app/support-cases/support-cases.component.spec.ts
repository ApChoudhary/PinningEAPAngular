import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportCasesComponent } from './support-cases.component';

describe('SupportCasesComponent', () => {
  let component: SupportCasesComponent;
  let fixture: ComponentFixture<SupportCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
