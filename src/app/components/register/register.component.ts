import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/Entities/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() onAddUser:EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
