import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampsListComponent } from './champs-list.component';

describe('ChampsListComponent', () => {
  let component: ChampsListComponent;
  let fixture: ComponentFixture<ChampsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
