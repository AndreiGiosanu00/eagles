import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMirrorComponent } from './page-mirror.component';

describe('PageMirrorComponent', () => {
  let component: PageMirrorComponent;
  let fixture: ComponentFixture<PageMirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMirrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
