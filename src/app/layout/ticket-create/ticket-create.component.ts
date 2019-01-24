import { Component, OnInit } from '@angular/core';
import {Ticket} from '../../shared/models/ticket';
import {Location} from '@angular/common';
import {DataService} from '../../shared/services/data.service';
import {Failure} from '../../shared/models/failure';
import {Machine} from '../../shared/models/machine';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent implements OnInit {
  failures: Failure[];
  machines: Machine[];
  ticket: Ticket = {
    status: 'oczekuje na realizacje',
  } as Ticket;

  constructor(
    private dataService: DataService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getFailureList().subscribe(list => {
      this.failures = list;
    });

    this.dataService.getMachineList().subscribe(list => {
      this.machines = list;
    });
  }

  save() {
    this.dataService.putTicket(this.ticket).subscribe(() => this.close());
  }

  close() {
    this.location.back();
  }

}
