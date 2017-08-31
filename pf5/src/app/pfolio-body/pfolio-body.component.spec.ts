import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfolioBodyComponent } from './pfolio-body.component';

describe('PfolioBodyComponent', () => {
  let component: PfolioBodyComponent;
  let fixture: ComponentFixture<PfolioBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfolioBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfolioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
