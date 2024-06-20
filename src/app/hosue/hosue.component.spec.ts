import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosueComponent } from './hosue.component';

describe('HosueComponent', () => {
  let component: HosueComponent;
  let fixture: ComponentFixture<HosueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HosueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HosueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
