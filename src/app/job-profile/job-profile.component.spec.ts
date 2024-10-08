import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProfileComponent } from './job-profile.component';

describe('JobProfileComponent', () => {
  let component: JobProfileComponent;
  let fixture: ComponentFixture<JobProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
