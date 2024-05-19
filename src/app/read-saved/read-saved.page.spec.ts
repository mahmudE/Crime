import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadSavedPage } from './read-saved.page';

describe('ReadSavedPage', () => {
  let component: ReadSavedPage;
  let fixture: ComponentFixture<ReadSavedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReadSavedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
