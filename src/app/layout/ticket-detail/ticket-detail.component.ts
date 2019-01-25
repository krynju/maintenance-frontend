import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Ticket} from '../../shared/models/ticket';
import {DataService} from '../../shared/services/data.service';
import {Failure} from '../../shared/models/failure';
import {Machine} from '../../shared/models/machine';
import {Location} from '@angular/common';
import * as moment from 'moment';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket;
  failure: Failure;
  machine: Machine;
  saveTimeout: boolean;
  allowedFlag: boolean = JSON.parse(localStorage.getItem('userData')).level === 0;


  dataSource;
  columnsToDisplay = ['id', 'title', 'created', 'ticket', 'user'];
  expandedElement: Comment | null;
  title: any;
  description: any;



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

      this.dataService.getComments()
        .subscribe((data: Comment[]) => {
          this.dataSource = data;
          this.dataSource = this.dataSource
            .filter(x => x.ticket === this.ticket.id)
            .sort((x, y) => new Date(x).valueOf() - new Date(y).valueOf())
            .map(x => {
              x.created = new Date(x.created).toDateString();
              return x;
            });
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

  addComment() {
    if (!!this.ticket && !!this.description) {
      this.dataService.putComment({
        'title': String(this.title), 'content': String(this.description),
        'ticket': this.ticket.id, 'user': JSON.parse(localStorage.getItem('userData')).id
      })
        .subscribe(data => {
          console.log('added comment');
          this.getData();
        });
    }
  }

  delete() {
    this.dataService.deleteTicket(this.ticket).subscribe(() => this.location.back());
  }


}


