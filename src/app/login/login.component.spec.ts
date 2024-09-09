import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty initial username and password', () => {
    expect(component.username).toBe('');
    expect(component.password).toBe('');
  });

  it('should log username and password on login', () => {
    spyOn(console, 'log');
    component.username = 'testuser';
    component.password = 'testpass';
    component.login();
    expect(console.log).toHaveBeenCalledWith('Username:', 'testuser');
    expect(console.log).toHaveBeenCalledWith('Password:', 'testpass');
  });
});
