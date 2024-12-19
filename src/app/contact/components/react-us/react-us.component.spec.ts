import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactUsComponent } from './react-us.component';

describe('ReactUsComponent', () => {
  let component: ReactUsComponent;
  let fixture: ComponentFixture<ReactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
