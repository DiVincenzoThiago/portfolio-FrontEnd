import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneCComponent } from './page-one-c.component';

describe('PageOneCComponent', () => {
  let component: PageOneCComponent;
  let fixture: ComponentFixture<PageOneCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOneCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOneCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
