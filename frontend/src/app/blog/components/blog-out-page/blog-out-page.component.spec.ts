import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOutPageComponent } from './blog-out-page.component';

describe('BlogOutPageComponent', () => {
  let component: BlogOutPageComponent;
  let fixture: ComponentFixture<BlogOutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogOutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
