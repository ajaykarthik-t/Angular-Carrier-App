import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewApplicationsComponent } from './view-applications.component';

describe('ViewApplicationsComponent', () => {
  let component: ViewApplicationsComponent;
  let fixture: ComponentFixture<ViewApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the confirmation modal for accept', () => {
    component.openConfirmationModal(1, 'accept');
    expect(component.isModalOpen).toBeTrue();
    expect(component.selectedApplicantId).toBe(1);
    expect(component.actionType).toBe('accept');
  });

  it('should open the confirmation modal for reject', () => {
    component.openConfirmationModal(2, 'reject');
    expect(component.isModalOpen).toBeTrue();
    expect(component.selectedApplicantId).toBe(2);
    expect(component.actionType).toBe('reject');
  });

  it('should accept the applicant and close the modal', () => {
    spyOn(console, 'log');
    component.openConfirmationModal(1, 'accept');
    component.confirmAction();
    expect(console.log).toHaveBeenCalledWith('John Doe has been accepted.');
    expect(component.isModalOpen).toBeFalse();
  });

  it('should reject the applicant and close the modal', () => {
    spyOn(console, 'log');
    component.openConfirmationModal(2, 'reject');
    component.confirmAction();
    expect(console.log).toHaveBeenCalledWith('Jane Smith has been rejected.');
    expect(component.isModalOpen).toBeFalse();
  });
});
