import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiuploadComponent } from './multiupload.component';

describe('MultiuploadComponent', () => {
  let component: MultiuploadComponent;
  let fixture: ComponentFixture<MultiuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
