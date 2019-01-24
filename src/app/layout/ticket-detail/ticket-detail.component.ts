import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Ticket} from '../../shared/models/ticket';
import {DataService} from '../../shared/services/data.service';
import {Failure} from '../../shared/models/failure';
import {Machine} from '../../shared/models/machine';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;
  failures: Failure[];
  machines: Machine[];
  saveTimeout: boolean;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
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
    });

    this.dataService.getFailureList().subscribe(list => {
      this.failures = list;
    });

    this.dataService.getMachineList().subscribe(list => {
      this.machines = list;
    });
  }

  save() {
    this.dataService.patchTicket(this.ticket).subscribe();
    this.saveTimeout = true;
    setTimeout(() => this.saveTimeout = false, 1000);
  }

}
