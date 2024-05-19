import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsReadingPage } from './news-reading.page';

describe('NewsReadingPage', () => {
  let component: NewsReadingPage;
  let fixture: ComponentFixture<NewsReadingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsReadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
