import { Component } from '@angular/core';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent {

  // List of applicants (could be fetched from an API)
  applicants = [
    { id: 1, name: 'John Doe', email: 'john@example.com', experience: 3, coverLetter: 'I am very interested in this position because...' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', experience: 5, coverLetter: 'I have the skills needed for this job...' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', experience: 2, coverLetter: 'I believe I am the best candidate for this job because...' }
  ];

  isModalOpen = false;  // Modal state
  selectedApplicantId: number | null = null;  // Applicant to accept/reject
  actionType: string = '';  // Action type ('accept' or 'reject')

  // Open the confirmation modal
  openConfirmationModal(applicantId: number, action: string) {
    this.selectedApplicantId = applicantId;
    this.actionType = action;
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
    this.selectedApplicantId = null;
    this.actionType = '';
  }

  // Confirm the action (accept or reject)
  confirmAction() {
    if (this.actionType === 'accept') {
      this.acceptApplicant(this.selectedApplicantId);
    } else if (this.actionType === 'reject') {
      this.rejectApplicant(this.selectedApplicantId);
    }
    this.closeModal();
  }

  // Accept the applicant
  acceptApplicant(applicantId: number | null) {
    const applicant = this.applicants.find(app => app.id === applicantId);
    if (applicant) {
      console.log(`${applicant.name} has been accepted.`);
      // Here you would make an API call to update the applicant's status in the backend
    }
  }

  // Reject the applicant
  rejectApplicant(applicantId: number | null) {
    const applicant = this.applicants.find(app => app.id === applicantId);
    if (applicant) {
      console.log(`${applicant.name} has been rejected.`);
      // Here you would make an API call to update the applicant's status in the backend
    }
  }
}
