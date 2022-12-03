import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTalleresComponent } from './listar-talleres.component';

describe('ListarTalleresComponent', () => {
  let component: ListarTalleresComponent;
  let fixture: ComponentFixture<ListarTalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTalleresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTalleresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
