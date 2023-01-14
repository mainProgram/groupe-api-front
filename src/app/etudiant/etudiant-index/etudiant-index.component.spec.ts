import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantIndexComponent } from './etudiant-index.component';

describe('EtudiantIndexComponent', () => {
  let component: EtudiantIndexComponent;
  let fixture: ComponentFixture<EtudiantIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
