import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditListComponent } from './reddit-list.component';

describe('RedditListComponent', () => {
  let component: RedditListComponent;
  let fixture: ComponentFixture<RedditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
