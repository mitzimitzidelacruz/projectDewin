import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTalleresComponent } from './crear-talleres.component';

describe('CrearTalleresComponent', () => {
  let component: CrearTalleresComponent;
  let fixture: ComponentFixture<CrearTalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTalleresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
