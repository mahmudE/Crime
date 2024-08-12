import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedNewsPage } from './saved-news.page';

describe('SavedNewsPage', () => {
  let component: SavedNewsPage;
  let fixture: ComponentFixture<SavedNewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SavedNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
