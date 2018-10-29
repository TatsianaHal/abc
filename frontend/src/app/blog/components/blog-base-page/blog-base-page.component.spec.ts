import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBasePageComponent } from './blog-base-page.component';

describe('BlogBasePageComponent', () => {
  let component: BlogBasePageComponent;
  let fixture: ComponentFixture<BlogBasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogBasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
