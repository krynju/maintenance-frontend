import {Component, OnInit} from '@angular/core';
import {UserInfoServiceService} from '../../../shared/services/user-info-service.service';
import {models} from 'server/models.js';
import {Ticket} from '../../../shared/models/Ticket';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.css']
})
export class DashPageComponent implements OnInit {
  ticketList: Ticket[];

  constructor(private userInfoService: UserInfoServiceService) {
  }

  ngOnInit() {
    this.userInfoService.getTicketList()
      .subscribe(data => this.ticketList = data);
  }

}
