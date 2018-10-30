import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostPrevComponent } from './blog-post-prev.component';

describe('BlogPostPrevComponent', () => {
  let component: BlogPostPrevComponent;
  let fixture: ComponentFixture<BlogPostPrevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostPrevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
