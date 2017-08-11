import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablematrixComponent } from './tablematrix.component';

describe('TablematrixComponent', () => {
  let component: TablematrixComponent;
  let fixture: ComponentFixture<TablematrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablematrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablematrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
