import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private accountService: AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  register() {
    this.accountService.register(this.registerForm.value).subscribe(response => {
      console.log(response);
      this.toastr.success("Konto zostało utworzone");
      this.registerForm.reset();
    }, error => {
        console.log(error);
    }
    )
  }

  private initializeForm() {
    this.registerForm = new FormGroup({
      'userName': new FormControl("", Validators.required),
      'homeName': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmPassword': new FormControl('', [Validators.required, this.matchValue('password')])
    });
  }

  private matchValue(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : { isMatching: true }
    }
  }
   

}
