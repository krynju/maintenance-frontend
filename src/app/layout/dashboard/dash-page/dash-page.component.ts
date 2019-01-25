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
  tickettext = 'Open tickets';
  failuretext = 'Open failures';
  mode: any = JSON.parse(localStorage.getItem('userData')).level === 0;

  constructor(private userInfoService: UserInfoService) {
  }

  ngOnInit() {
    if (!this.mode) {
      this.tickettext = 'Assigned tickets';
      this.failuretext = 'Connected failures';
    }
  }

}
