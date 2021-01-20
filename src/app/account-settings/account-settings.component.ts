import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserDTO } from '../_models/userDTO';
import { AccountService } from '../_services/account/account.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  user: UserDTO;

  homeNameField = true;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }


  changeHomeNameField() {
    this.homeNameField = false;
  }

}
