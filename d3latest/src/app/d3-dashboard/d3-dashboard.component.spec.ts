import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3DashboardComponent } from './d3-dashboard.component';

describe('D3DashboardComponent', () => {
  let component: D3DashboardComponent;
  let fixture: ComponentFixture<D3DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
