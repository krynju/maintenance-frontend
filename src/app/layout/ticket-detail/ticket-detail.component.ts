import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ticket} from '../../shared/models/ticket';
import {DataService} from '../../shared/services/data.service';
import {Failure} from '../../shared/models/failure';
import {Machine} from '../../shared/models/machine';
import {Location} from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;
  failure: Failure;
  machine: Machine;
  saveTimeout: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private location: Location,


  ) { }

  ngOnInit() {
    this.saveTimeout = false;
    this.getData();
  }

  getData() {
    const id = +this.route.snapshot.paramMap.get('id');

    // TODO: lepiej byłoby zrobić detail endpoint w backendzie ale nie ma czasu

    this.dataService.getTicketList().subscribe(list => {
      this.ticket = list.find((obj) => obj.id === id);

      this.dataService.getFailureList().subscribe(data => {
        this.failure = data.find(x => x.id === this.ticket.failure);
      });
      this.dataService.getMachineList().subscribe(data => {
        this.machine = data.find(x => x.id === this.ticket.machine);
      });
    });
  }

  formatTime(time) {
    return moment(time).format('LLL');
  }

  save() {
    this.dataService.patchTicket(this.ticket).subscribe(() => this.close());
  }

  close() {
    this.location.back();
  }

  edit() {
    this.router.navigate(['/app/ticket-edit/' + String(this.route.snapshot.paramMap.get('id'))]);
  }
}
