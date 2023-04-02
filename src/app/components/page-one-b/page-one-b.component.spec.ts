import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneBComponent } from './page-one-b.component';

describe('PageOneBComponent', () => {
  let component: PageOneBComponent;
  let fixture: ComponentFixture<PageOneBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOneBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOneBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
