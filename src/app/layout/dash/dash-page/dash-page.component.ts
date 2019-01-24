import {Component, OnInit} from '@angular/core';
import {UserInfoServiceService} from '../../../shared/services/user-info-service.service';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.css']
})
export class DashPageComponent implements OnInit {
  ticketlist: any;

  constructor(private userInfoService: UserInfoServiceService) {
  }

  ngOnInit() {
    this.userInfoService.getTicketList()
      .subscribe(data => this.ticketlist = data);
  }

}
