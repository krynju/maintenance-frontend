import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Ticket} from '../../shared/models/ticket';
import {DataService} from '../../shared/services/data.service';
import {Failure} from '../../shared/models/failure';
import {Machine} from '../../shared/models/machine';
import {Location} from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {
  ticket: Ticket;
  failures: Failure[];
  machines: Machine[];
  saveTimeout: boolean;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location,
  ) {
  }

  ngOnInit() {
    this.saveTimeout = false;
    this.getData();
  }

  getData() {
    const id = +this.route.snapshot.paramMap.get('id');

    // TODO: lepiej byłoby zrobić detail endpoint w backendzie ale nie ma czasu
    this.dataService.getTicketList().subscribe(list => {
      this.ticket = list.find((obj) => obj.id === id);
    });

    this.dataService.getFailureList().subscribe(list => {
      this.failures = list;
    });

    this.dataService.getMachineList().subscribe(list => {
      this.machines = list;
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

}
