import {Component, OnInit} from '@angular/core';
import {UserInfoService} from '../../../shared/services/user-info.service';
import {models} from 'server/models.js';
import {Ticket} from '../../../shared/models/ticket';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.css']
})
export class DashPageComponent implements OnInit {
  ticketList: Ticket[];

  constructor(private userInfoService: UserInfoService) {
  }

  ngOnInit() {

  }

}
