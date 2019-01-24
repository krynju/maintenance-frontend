import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() elo;
  activeFailureCount: number;
  activeTicketCount: number;
  username = 'user';

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit() {
    if (localStorage.getItem('userData')) {
      this.username = JSON.parse(localStorage.getItem('userData')).firstName;
    }

    this.dataService.getActiveFailureCount().subscribe(result => this.activeFailureCount = result['count']);
    this.dataService.getActiveTicketCount().subscribe(result => this.activeTicketCount = result['count']);
  }

}
