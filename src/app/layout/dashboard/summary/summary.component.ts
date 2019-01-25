import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() mode;
  @Input() elo;
  activeFailureCount: number;
  activeTicketCount: number;
  username = 'user';

  textAdmin = ['There are', 'tickets open throughout', 'failure reports'];
  textUser = ['You are assigned to', 'tickets open throughout', 'failure reports'];

  text = this.textUser;

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit() {
    if (this.mode) {
      this.text = this.textAdmin;
    }
    if (localStorage.getItem('userData')) {
      this.username = JSON.parse(localStorage.getItem('userData')).firstName;
    }

    this.dataService.getActiveFailureCount().subscribe(result => this.activeFailureCount = result['count']);
    this.dataService.getActiveTicketCount().subscribe(result => this.activeTicketCount = result['count']);
  }

}
