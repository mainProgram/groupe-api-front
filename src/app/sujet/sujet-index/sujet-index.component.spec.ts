import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetIndexComponent } from './sujet-index.component';

describe('SujetIndexComponent', () => {
  let component: SujetIndexComponent;
  let fixture: ComponentFixture<SujetIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujetIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
